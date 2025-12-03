import React from 'react';

const Summary = ({ processedData }: { processedData: any }) => {
  const [rows, setRows] = React.useState([
    {
      label: '생기부 강점',
      content: Array.isArray(processedData?.aiAnalysis?.strengths)
        ? processedData.aiAnalysis.strengths.join('\n')
        : processedData?.aiAnalysis?.strengths || '',
    },
    {
      label: '생기부 약점',
      content: Array.isArray(processedData?.aiAnalysis?.weaknesses)
        ? processedData.aiAnalysis.weaknesses.join('\n')
        : processedData?.aiAnalysis?.weaknesses || '',
    },
    {
      label: '앞으로 해야 할 일',
      content: Array.isArray(processedData?.aiAnalysis?.nextSteps)
        ? processedData.aiAnalysis.nextSteps.join('\n')
        : processedData?.aiAnalysis?.nextSteps || '',
    },
    {
      // ✅ 추가: 종합 의견 (overallOpinion)
      label:
        processedData?.aiAnalysisLabels?.overallOpinionLabel || '종합 의견',
      content: Array.isArray(processedData?.aiAnalysis?.overallOpinion)
        ? processedData.aiAnalysis.overallOpinion.join('\n')
        : processedData?.aiAnalysis?.overallOpinion || '',
    },
    {
      label: '면접 예상 질문',
      content: Array.isArray(processedData?.aiAnalysis?.interviewQuestions)
        ? processedData.aiAnalysis.interviewQuestions.join('\n')
        : processedData?.aiAnalysis?.interviewQuestions || '',
    },
  ]);

  // 편집 모드
  const [isEditing, setIsEditing] = React.useState(false);

  // 툴팁/선택 상태
  const [show, setShow] = React.useState(false);
  const [pos, setPos] = React.useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [selectedText, setSelectedText] = React.useState('');
  const [selectedSection, setSelectedSection] = React.useState('');

  // 마지막 content textarea와 selectionStart 저장
  const [lastContentIdx, setLastContentIdx] = React.useState<number | null>(
    null
  );
  const [lastSelectionStart, setLastSelectionStart] = React.useState<
    number | null
  >(null);

  // 모달
  const [openModal, setOpenModal] = React.useState(false);
  const [modalText, setModalText] = React.useState('');

  // 저장 Confirm 모달
  const [openConfirm, setOpenConfirm] = React.useState(false);

  // 취소 재확인 RealConfirm 모달
  const [openRealConfirm, setOpenRealConfirm] = React.useState(false);

  // 토스트
  const [toastOpen, setToastOpen] = React.useState(false);

  // 참조
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const contentTextareasRef = React.useRef<Array<HTMLTextAreaElement | null>>(
    []
  );

  function toPlainText(htmlish: string | undefined | null) {
    if (!htmlish || typeof htmlish !== 'string') return '';
    const withNewlines = htmlish.replace(/<br\s*\/?>/gi, '\n');
    return withNewlines;
  }

  // ===== 편집 모드일 때만 selection 관련 로직 유지 =====
  React.useEffect(() => {
    if (!isEditing) {
      setShow(false);
      setSelectedText('');
      setLastContentIdx(null);
      setLastSelectionStart(null);
      return;
    }
  }, [isEditing]);

  // ===== 편집 모드: textarea 내부 선택 → "선택 시작" 지점 기준 =====
  const handleContentTextareaSelection = React.useCallback(
    (idx: number) => {
      if (!isEditing || openModal) return;

      const ta = contentTextareasRef.current[idx];
      if (!ta) return;

      const start = ta.selectionStart ?? 0;
      const end = ta.selectionEnd ?? 0;

      if (start === end) {
        setShow(false);
        setSelectedText('');
        setLastContentIdx(null);
        setLastSelectionStart(null);
        return;
      }

      const selected = ta.value.slice(start, end);

      setSelectedText(selected);

      setShow(true);
      setLastContentIdx(idx);
      setLastSelectionStart(start);
    },
    [isEditing, openModal]
  );

  // 스크롤/리사이즈 시 재계산 (편집 모드에서만)
  React.useEffect(() => {
    const onScrollOrResize = () => {
      if (!show || !isEditing) return;

      if (lastContentIdx !== null && lastSelectionStart !== null) {
        const ta = contentTextareasRef.current[lastContentIdx];
        if (!ta) return;
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [show, isEditing, lastContentIdx, lastSelectionStart]);

  // 공통 textarea 스타일
  const tdTextareaCls =
    'focus:outline-none p-[8px] border border-[#E2E5EA] w-full rounded-[8px] text-[14px] leading-[150%] resize-none';

  return (
    <table className='w-full table-fixed border-collapse'>
      <colgroup>
        <col className='w-[140px]' />
        <col />
      </colgroup>
      <thead>
        <tr className='bg-[#f7f8fc]'>
          <th className='border border-[#D1D5DC] border-t-0 px-[8px] py-[12px] text-left text-[14px] font-[500] text-[#37383B] first:border-l-0 last:border-r-0'>
            구분
          </th>
          <th className='border border-[#D1D5DC] border-t-0 px-[8px] py-[12px] text-left text-[14px] font-[500] text-[#37383B] first:border-l-0 last:border-r-0'>
            내용
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} className='bg-white last:[&>td]:border-b-0'>
            {/* 첫 번째 td */}
            <td
              className='border border-[#D1D5DC] bg-[#F7F8FA] px-[8px] py-[12px] align-middle text-[14px] font-[400] leading-[150%] text-[#37383B] first:border-l-0 last:border-r-0'
              data-col='label'
            >
              {isEditing ? (
                <textarea
                  className={tdTextareaCls}
                  value={rows[idx].label}
                  onChange={(e) => {
                    const next = [...rows];
                    next[idx] = { ...next[idx], label: e.target.value };
                    setRows(next);
                  }}
                  rows={1}
                />
              ) : (
                row.label
              )}
            </td>

            {/* 두 번째 td */}
            <td
              className='border border-[#D1D5DC] px-[8px] py-[12px] align-middle text-[14px] font-[400] leading-[150%] text-[#37383B] first:border-l-0 last:border-r-0'
              data-col='content'
            >
              {isEditing ? (
                <textarea
                  ref={(el) => {
                    contentTextareasRef.current[idx] = el;
                  }}
                  className={
                    tdTextareaCls +
                    ' selection:bg-[#efeff0] selection:text-[#37383B]'
                  }
                  value={toPlainText(rows[idx].content)}
                  onChange={(e) => {
                    const next = [...rows];
                    next[idx] = { ...next[idx], content: e.target.value };
                    setRows(next);
                  }}
                  onMouseUp={() => handleContentTextareaSelection(idx)}
                  onKeyUp={() => handleContentTextareaSelection(idx)}
                  onTouchEnd={() => handleContentTextareaSelection(idx)}
                  rows={5}
                />
              ) : (
                <div className='whitespace-pre-wrap'>
                  {toPlainText(row.content)}
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Summary;
