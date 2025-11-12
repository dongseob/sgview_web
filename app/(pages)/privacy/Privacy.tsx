const Privacy = () => {
  return (
    <div className='pt-[40px] pb-[120px] max-[745px]:pt-[32px] max-[745px]:pb-[0px] max-[745px]:px-[0px]'>
      <div className='w-full max-w-[898px] mx-auto px-[20px] max-[745px]:px-[0]'>
        <h1 className='text-[26px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[40px] text-center max-[745px]:text-[24px]'>
          개인정보처리방침
        </h1>
        <div className='w-full bg-white rounded-[8px] p-[40px] max-[745px]:p-[20px] max-[745px]:pr-0'>
          {/* 섹션 1: 개인정보의 처리 목적 */}
          <div className='mb-[40px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
              1. 개인정보의 처리 목적
            </h2>
            <p className='text-[16px] font-[400] leading-[1.6] text-[var(--n-600)] '>
              회사는 다음의 목적을 위해 개인정보를 처리합니다.
            </p>
            <ul className='list-disc list-inside  text-[16px] font-[400] leading-[1.6] text-[var(--n-600)] pl-[4px]'>
              <li>
                <span className='font-[500]'>서비스 제공:</span> 분석 리포트
                제공, 컨설팅 서비스 이행, 본인 인증 및 요금 정산.
              </li>
              <li>
                <span className='font-[500]'>회원 관리:</span> 회원제 서비스
                이용, 부정이용 방지, 민원 처리 등.
              </li>
              <li>
                <span className='font-[500]'>
                  마케팅 및 광고 활용 (선택 동의 시):
                </span>{' '}
                신규 서비스 및 이벤트 정보 제공, 맞춤형 광고 등.
              </li>
            </ul>
          </div>

          {/* 섹션 2: 수집하는 개인정보 항목 및 수집 방법 */}
          <div className='mb-[40px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[24px] max-[745px]:text-[18px]'>
              2. 수집하는 개인정보 항목 및 수집 방법
            </h2>
            <div className='w-full overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[0px] max-[745px]:pr-[20px]'>
              <div className='w-full border-t-[var(--n-800)] border-t min-w-[858px] hidden max-[745px]:block'></div>
              <table className='w-full border-collapse max-[745px]:min-w-[858px]'>
                <colgroup>
                  <col width='132px' />
                  <col width='240px' />
                  <col width='240px' />
                  <col width='240px' />
                </colgroup>
                <thead>
                  <tr className='bg-[var(--n-50)]'>
                    <th className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                      구분
                    </th>
                    <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                      수집항목
                    </th>
                    <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                      처리 목적
                    </th>
                    <th className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                      보유 기간
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      회원가입(필수)
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      성명, 이메일, 휴대전화번호
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      서비스 이용, 본인 확인
                    </td>
                    <td className='border border-[var(--n-200)] text-[1\5px] font-[400] border-r-0 text-[14px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      탈퇴 후 6개월
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      생기부 분석(필수)
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      학생의 학교생활기록부 일체
                      <br />
                      (성적, 활동 내용 등)
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      AI 분석 서비스 제공, 맞춤형 컨설팅 제공
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] border-r-0 px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      5년
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      결제정보(필수)
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      공통: 결제일시, 결제수단, 결제금액, 쿠폰사용내역
                      <br />
                      신용카드결제시: 카드사명, 카드번호, 할부 정보 등 정산을
                      위한 정보
                      <br />
                      간편결제 서비스 이용시: 이름, 휴대전화번호
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      유료 서비스 결제 및 환불, 대금 정산
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] border-r-0 px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      5년 (전자상거래법 기준)
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      마케팅 및 광고에 활용(선택)
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      성명, 이메일, 휴대전화번호
                      <br />
                      (마케팅 정보 수신 동의 시)
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및
                      광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에
                      따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인,
                      접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] border-r-0 px-[8px] py-[12px] text-[14px] text-[var(--n-600)] align-top'>
                      회원 탈퇴시 혹은 마케팅 동의 해제 시까지
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 섹션 3: 개인정보의 제3자 제공에 관한 사항 */}
          <div className='mb-[40px] max-[745px]:pr-[20px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[24px] max-[745px]:text-[18px]'>
              3. 개인정보의 제3자 제공에 관한 사항
            </h2>
            <p className='text-[15px] leading-[1.4] text-[var(--n-800)] mb-[8px]'>
              회사는 원칙적으로 제1조에서 명시한 목적 범위를 초과하여 개인정보를
              이용하거나 다른 회사 및 기관에 제공하지 않습니다.
            </p>
            <p className='text-[15px] leading-[1.4] text-[var(--n-800)]'>
              다만, 이용자가 사전에 동의한 경우 또는 법령에 의하여 수사·조사
              등의 목적으로 관계기관으로부터 요구가 있는 경우에는 예외로 합니다.
            </p>
          </div>

          {/* 섹션 4: 개인정보의 처리 위탁에 관한 사항 */}
          <div className='mb-[40px] '>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[24px] max-[745px]:text-[18px]'>
              4. 개인정보의 처리 위탁에 관한 사항
            </h2>
            <div className='w-full overflow-x-auto border-t-[var(--n-800)] border-t max-[745px]:border-t-0 max-[745px]:px-[20px] max-[745px]:pl-[0px]'>
              <div className='w-full border-t-[var(--n-800)] border-t min-w-[600px] hidden max-[745px]:block'></div>
              <table className='w-full border-collapse max-[745px]:min-w-[600px]'>
                <colgroup>
                  <col width='132px' />
                  <col width='361px' />
                  <col width='361px' />
                </colgroup>
                <thead>
                  <tr className='bg-[var(--n-50)]'>
                    <th className='border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                      구분
                    </th>
                    <th className='border border-[var(--n-200)] px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                      위탁받는자
                    </th>
                    <th className='border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-left text-[15px] font-[600] text-[var(--n-800)]'>
                      위탁하는 업무의 내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                      결제
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                      (주)NHN KCP
                    </td>
                    <td className='border border-[var(--n-200)] border-r-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                      결제 대행서비스
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-[var(--n-200)] border-l-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                      개발 및 운영 유지보수
                    </td>
                    <td className='border border-[var(--n-200)] text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                      (주)AX
                    </td>
                    <td className='border border-[var(--n-200)] border-r-0 text-[15px] font-[400] px-[8px] py-[12px] text-[var(--n-800)] align-top'>
                      서비스제공을 위한 시스템 개발 및 운영, 이용자정보 DB시스템
                      구축 및 운영 관리(전산 아웃소싱 등)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 섹션 5: 개인정보의 안전성 확보 조치  */}
          <div className='mb-[40px] max-[745px]:pr-[20px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] mb-[32px] max-[745px]:text-[18px]'>
              5. 개인정보의 안전성 확보 조치
            </h2>
            <ul className='space-y-[12px] text-[15px] leading-[1.4] text-[var(--n-800)]'>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  <span className='font-[600] text-[var(--n-800)]'>
                    개인정보 마스킹 처리:
                  </span>{' '}
                  생기부 분석 데이터는 학생의 모든 개인정보를 마스킹 처리하여
                  특정인을 특정할 수 없도록 관리됩니다.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <div className='flex-1'>
                  <span className='font-[600] text-[var(--n-800)]'>
                    접근 통제 및 로그 관리:
                  </span>
                  <ul className='mt-[8px]  pl-[20px]'>
                    <li className='flex items-start'>
                      <span className='mr-[6px]'>•</span>
                      <span>
                        기관 회원, 컨설턴트 회원의 정보 접근 권한은 제10조(기관
                        및 컨설턴트의 정보 접근 권한 및 관리)에 따라 엄격히
                        통제됩니다.
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-[6px]'>•</span>
                      <span>
                        기관 회원은 소속 회원의 목록 및 컨설팅 신청 내역만
                        확인할 수 있습니다.
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-[6px]'>•</span>
                      <span>
                        컨설턴트 회원은 배정받은 컨설팅 신청 건에 한해서만 관련
                        정보를 열람할 수 있습니다.
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <span className='mr-[6px]'>•</span>
                      <span>
                        기관 및 컨설턴트가 개별 개인정보를 열람하는 경우 로그
                        기록이 남으며, 최고관리자 및 기관관리자의 확인이
                        가능하도록 시스템을 운영하여 개인정보의 오남용을
                        방지합니다.
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  <span className='font-[600] text-[var(--n-800)]'>
                    기술적/관리적 보호조치:
                  </span>{' '}
                  개인정보 암호화, 보안 프로그램 설치, 접근 권한 최소화 등.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  <span className='font-[600] text-[var(--n-800)]'>
                    암호화:
                  </span>{' '}
                  비밀번호 및 결제 정보 등 주요 개인정보는 암호화되어 저장 및
                  관리됩니다.
                </span>
              </li>
            </ul>
          </div>

          {/* 섹션 6: 이용자 및 법정대리인의 권리 행사 방법 */}
          <div className='mb-[40px] max-[745px]:pr-[20px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
              6. 이용자 및 법정대리인의 권리 행사 방법
            </h2>
            <ul className='] text-[15px] leading-[1.4] text-[var(--n-800)]'>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  이용자 및 만 14세 미만 아동의 법정대리인은 언제든지 등록되어
                  있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 회원
                  탈퇴를 요청하거나 개인정보 처리 동의를 철회할 수 있습니다.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  권리 행사는 회사에 서면, 전화, 전자우편 등을 통해 연락하여
                  가능하며, 회사는 지체 없이 조치합니다.
                </span>
              </li>
            </ul>
          </div>

          {/* 섹션 7: 만 14세 미만 아동의 개인정보 처리 */}
          <div className='mb-[40px] max-[745px]:pr-[20px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
              7. 만 14세 미만 아동의 개인정보 처리
            </h2>
            <ul className=' text-[15px] leading-[1.4] text-[var(--n-800)]'>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  회사는 만 14세 미만 아동의 개인정보를 수집/이용하는 경우
                  「개인정보보호법」에 따라 법정대리인의 동의를 받습니다.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  회사는 법정대리인의 동의를 얻기 위하여 필요한 최소한의 정보를
                  요청할 수 있습니다.
                </span>
              </li>
            </ul>
          </div>

          {/* 섹션 8: 개인정보 보호책임자 및 고지의 의무 */}
          <div className='mb-[40px] max-[745px]:pr-[20px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
              8. 개인정보 보호책임자 및 고지의 의무
            </h2>
            <ul className=' text-[15px] leading-[1.4] text-[var(--n-800)]'>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  <span className='font-[600] text-[var(--n-800)]'>
                    개인정보 보호책임자:
                  </span>{' '}
                  이지나 (대표) / 연락처: 010-1234-5678, ceo@istrueedu.kr
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  본 방침이 변경될 경우 개정 최소 7일 전(중요한 변경사항은 30일
                  전)에 공지를 통해 안내합니다.
                </span>
              </li>
            </ul>
          </div>

          {/* 섹션 9: 개인정보 처리방침 변경 */}
          <div className='mb-[40px] max-[745px]:pr-[20px]'>
            <h2 className='text-[20px] font-[700] text-[var(--n-800)] leading-[1.3] max-[745px]:text-[18px]'>
              9. 개인정보 처리방침 변경
            </h2>
            <ul className='text-[15px] leading-[1.4] text-[var(--n-800)]'>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  본 개인정보 처리방침은 2025년 12월 01일부터 적용 및
                  시행됩니다.
                </span>
              </li>
              <li className='flex items-start'>
                <span className='mr-[8px]'>•</span>
                <span>
                  이전의 개인정보 처리방침은 아래에서 확인할 수 있습니다.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
