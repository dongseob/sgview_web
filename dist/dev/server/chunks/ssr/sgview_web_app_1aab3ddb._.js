module.exports = [
"[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * 중앙 모달 - 섬모양
 */ const ModalScoreCenter = ({ isOpen, onClose, title, children, height = 'auto', footer, width })=>{
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ESC 키로 모달 닫기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        isOpen,
        onClose
    ]);
    // 모달 외부 클릭 시 닫기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOutsideClick = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target) && isOpen) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return ()=>document.removeEventListener('mousedown', handleOutsideClick);
    }, [
        isOpen,
        onClose
    ]);
    // 모달 열릴 때 스크롤 방지
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [
        isOpen
    ]);
    // 모달이 닫혀있으면 렌더링하지 않음
    if (!isOpen) return null;
    // createPortal을 사용하여 모달을 body 바로 아래에 렌더링
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 max-md:items-end",
        onClick: onClose,
        role: "dialog",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: modalRef,
            className: " bg-white rounded-xl text-base leading-5 z-20 relative overflow-hidden w-[480px] max-md:w-[calc(100%-32px)] max-md:max-h-[90vh] max-md:rounded-bl-[0px] max-md:rounded-br-[0px]",
            style: {
                height,
                maxHeight: '90vh',
                width: width
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between relative px-[20px] pb-[24px] pt-[20px] h-[78px] max-md:px-[16px] max-md:pb-[16px] max-md:pt-[16px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-left text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] max-md:text-[18px]",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: `/images/icon-close-24.svg`,
                                alt: "close",
                                width: 20,
                                height: 20
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), document.body);
};
const __TURBOPACK__default__export__ = ModalScoreCenter;
}),
"[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f$component$2f$Modal$2f$ModalScoreCenter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/app/component/Modal/ModalScoreCenter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
const CreatableSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/sgview_web/node_modules/react-select/creatable/dist/react-select-creatable.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
// 한국 대학교 리스트 (가나다순)
const universityOptions = [
    {
        value: '가톨릭대학교',
        label: '가톨릭대학교'
    },
    {
        value: '강릉원주대학교',
        label: '강릉원주대학교'
    },
    {
        value: '강원대학교',
        label: '강원대학교'
    },
    {
        value: '건국대학교',
        label: '건국대학교'
    },
    {
        value: '경북대학교',
        label: '경북대학교'
    },
    {
        value: '경희대학교',
        label: '경희대학교'
    },
    {
        value: '고려대학교',
        label: '고려대학교'
    },
    {
        value: '공주대학교',
        label: '공주대학교'
    },
    {
        value: '광운대학교',
        label: '광운대학교'
    },
    {
        value: '국민대학교',
        label: '국민대학교'
    },
    {
        value: '단국대학교',
        label: '단국대학교'
    },
    {
        value: '동국대학교',
        label: '동국대학교'
    },
    {
        value: '부산대학교',
        label: '부산대학교'
    },
    {
        value: '서강대학교',
        label: '서강대학교'
    },
    {
        value: '서울과학기술대학교',
        label: '서울과학기술대학교'
    },
    {
        value: '서울대학교',
        label: '서울대학교'
    },
    {
        value: '서울시립대학교',
        label: '서울시립대학교'
    },
    {
        value: '성균관대학교',
        label: '성균관대학교'
    },
    {
        value: '세종대학교',
        label: '세종대학교'
    },
    {
        value: '숙명여자대학교',
        label: '숙명여자대학교'
    },
    {
        value: '숭실대학교',
        label: '숭실대학교'
    },
    {
        value: '안동대학교',
        label: '안동대학교'
    },
    {
        value: '안산공과대학교',
        label: '안산공과대학교'
    },
    {
        value: '안산대학교',
        label: '안산대학교'
    },
    {
        value: '안양대학교',
        label: '안양대학교'
    },
    {
        value: '연세대학교',
        label: '연세대학교'
    },
    {
        value: '영남대학교',
        label: '영남대학교'
    },
    {
        value: '이화여자대학교',
        label: '이화여자대학교'
    },
    {
        value: '인천대학교',
        label: '인천대학교'
    },
    {
        value: '인하대학교',
        label: '인하대학교'
    },
    {
        value: '전남대학교',
        label: '전남대학교'
    },
    {
        value: '전북대학교',
        label: '전북대학교'
    },
    {
        value: '제주대학교',
        label: '제주대학교'
    },
    {
        value: '중앙대학교',
        label: '중앙대학교'
    },
    {
        value: '충남대학교',
        label: '충남대학교'
    },
    {
        value: '충북대학교',
        label: '충북대학교'
    },
    {
        value: '한국외국어대학교',
        label: '한국외국어대학교'
    },
    {
        value: '한국체육대학교',
        label: '한국체육대학교'
    },
    {
        value: '한양대학교',
        label: '한양대학교'
    },
    {
        value: '홍익대학교',
        label: '홍익대학교'
    }
];
// 주요 학과 리스트 (가나다순)
const majorOptions = [
    {
        value: '간호학과',
        label: '간호학과'
    },
    {
        value: '건축학과',
        label: '건축학과'
    },
    {
        value: '경영학과',
        label: '경영학과'
    },
    {
        value: '경제학과',
        label: '경제학과'
    },
    {
        value: '교육학과',
        label: '교육학과'
    },
    {
        value: '국어국문학과',
        label: '국어국문학과'
    },
    {
        value: '기계공학과',
        label: '기계공학과'
    },
    {
        value: '데이터사이언스학과',
        label: '데이터사이언스학과'
    },
    {
        value: '디자인학과',
        label: '디자인학과'
    },
    {
        value: '물리학과',
        label: '물리학과'
    },
    {
        value: '미디어커뮤니케이션학과',
        label: '미디어커뮤니케이션학과'
    },
    {
        value: '법학과',
        label: '법학과'
    },
    {
        value: '사회학과',
        label: '사회학과'
    },
    {
        value: '산업공학과',
        label: '산업공학과'
    },
    {
        value: '생명과학과',
        label: '생명과학과'
    },
    {
        value: '수학과',
        label: '수학과'
    },
    {
        value: '신소재공학과',
        label: '신소재공학과'
    },
    {
        value: '심리학과',
        label: '심리학과'
    },
    {
        value: '약학과',
        label: '약학과'
    },
    {
        value: '영어영문학과',
        label: '영어영문학과'
    },
    {
        value: '의예과',
        label: '의예과'
    },
    {
        value: '전기전자공학과',
        label: '전기전자공학과'
    },
    {
        value: '정치외교학과',
        label: '정치외교학과'
    },
    {
        value: '제약학과',
        label: '제약학과'
    },
    {
        value: '컴퓨터공학과',
        label: '컴퓨터공학과'
    },
    {
        value: '통계학과',
        label: '통계학과'
    },
    {
        value: '화학공학과',
        label: '화학공학과'
    },
    {
        value: '화학과',
        label: '화학과'
    },
    {
        value: '환경공학과',
        label: '환경공학과'
    }
];
const ConsultApply = ()=>{
    const [agreeTerms, setAgreeTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadedFile, setUploadedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedUniversities, setSelectedUniversities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedMajors, setSelectedMajors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 폼 유효성 검사
    const isFormValid = selectedUniversities.length > 0 && selectedMajors.length > 0 && uploadedFile && agreeTerms;
    // 모의고사 점수 상태
    const [scores, setScores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        korean_subject: '',
        korean_standard: '',
        korean_percentile: '',
        korean_grade: '',
        math_subject: '',
        math_standard: '',
        math_percentile: '',
        math_grade: '',
        english_grade: '',
        history_grade: '',
        inquiry1_subject: '',
        inquiry1_standard: '',
        inquiry1_percentile: '',
        inquiry1_grade: '',
        inquiry2_subject: '',
        inquiry2_standard: '',
        inquiry2_percentile: '',
        inquiry2_grade: '',
        second_lang_grade: ''
    });
    const handleFileUpload = ()=>{
        fileInputRef.current?.click();
    };
    const [isOpenScore, setIsOpenScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFileChange = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFile(file);
        }
    };
    const handleFileRemove = ()=>{
        setUploadedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-[40px] pb-[120px] max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[328px] mx-auto  flex flex-col items-center justify-center gap-[32px] max-md:py-[0]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]",
                        children: "입시컨설팅 신청"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[24px] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[8px] w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#36373A] text-[13px] font-medium",
                                        children: [
                                            "희망대학",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#F6432B]",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreatableSelect, {
                                        isMulti: true,
                                        hideSelectedOptions: false,
                                        placeholder: "희망대학 입력",
                                        value: selectedUniversities,
                                        onChange: (newValue)=>{
                                            // 최대 3개 제한
                                            const universities = newValue;
                                            if (universities && universities.length <= 3) {
                                                setSelectedUniversities(universities);
                                            }
                                        },
                                        options: universityOptions,
                                        formatCreateLabel: (inputValue)=>`"${inputValue}" 생성`,
                                        noOptionsMessage: ({ inputValue })=>inputValue ? `"${inputValue}"에 대한 결과가 없습니다.` : '검색어를 입력하세요.',
                                        components: {
                                            DropdownIndicator: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pr-[16px] flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/icon-arrow-24.svg",
                                                        alt: "arrow",
                                                        width: 24,
                                                        height: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, void 0)
                                        },
                                        styles: {
                                            control: (base, state)=>({
                                                    ...base,
                                                    minHeight: '50px',
                                                    borderRadius: '8px',
                                                    borderColor: state.isFocused ? '#D7D8DC' : '#D7D8DC',
                                                    boxShadow: state.isFocused ? 'none' : 'none',
                                                    '&:hover': {
                                                        borderColor: '#D7D8DC'
                                                    },
                                                    cursor: 'text',
                                                    backgroundColor: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }),
                                            valueContainer: (base)=>({
                                                    ...base,
                                                    padding: '6px 0 6px 16px',
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '2px'
                                                }),
                                            placeholder: (base, state)=>({
                                                    ...base,
                                                    fontSize: '15px',
                                                    fontWeight: '400',
                                                    color: '#AFB0B6',
                                                    display: state.selectProps.menuIsOpen ? 'none' : 'block'
                                                }),
                                            input: (base)=>({
                                                    ...base,
                                                    fontSize: '15px',
                                                    fontWeight: '400',
                                                    color: '#36373A',
                                                    margin: '0',
                                                    padding: '0'
                                                }),
                                            multiValue: (base)=>({
                                                    ...base,
                                                    backgroundColor: '#F3F4F6',
                                                    borderRadius: '6px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '4px 8px',
                                                    gap: '4px'
                                                }),
                                            multiValueLabel: (base)=>({
                                                    ...base,
                                                    fontSize: '14px',
                                                    fontWeight: '400',
                                                    color: '#36373A',
                                                    padding: '0',
                                                    paddingLeft: '0'
                                                }),
                                            multiValueRemove: (base)=>({
                                                    ...base,
                                                    color: '#9CA3AF',
                                                    cursor: 'pointer',
                                                    paddingLeft: '4px',
                                                    paddingRight: '0',
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        color: '#6B7280'
                                                    }
                                                }),
                                            menu: (base)=>({
                                                    ...base,
                                                    borderRadius: '8px',
                                                    marginTop: '4px',
                                                    border: '1px solid #D7D8DC',
                                                    boxShadow: 'none',
                                                    overflow: 'hidden',
                                                    zIndex: 10
                                                }),
                                            menuList: (base)=>({
                                                    ...base,
                                                    padding: '8px 0'
                                                }),
                                            option: (base, state)=>({
                                                    ...base,
                                                    fontSize: '15px',
                                                    fontWeight: '400',
                                                    cursor: 'pointer',
                                                    backgroundColor: state.isSelected ? '#F6432B' : state.isFocused ? '#F3F4F6' : 'white',
                                                    color: state.isSelected ? 'white' : '#36373A',
                                                    borderRadius: '0',
                                                    padding: '10px 16px',
                                                    '&:active': {
                                                        backgroundColor: '#F3F4F6',
                                                        color: '#36373A'
                                                    }
                                                }),
                                            indicatorSeparator: ()=>({
                                                    display: 'none'
                                                }),
                                            clearIndicator: ()=>({
                                                    display: 'none'
                                                })
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[8px] w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#36373A] text-[13px] font-medium",
                                        children: [
                                            "희망학과",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#F6432B]",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CreatableSelect, {
                                        isMulti: true,
                                        hideSelectedOptions: false,
                                        placeholder: "희망학과 입력",
                                        value: selectedMajors,
                                        onChange: (newValue)=>{
                                            // 최대 3개 제한
                                            const majors = newValue;
                                            if (majors && majors.length <= 3) {
                                                setSelectedMajors(majors);
                                            }
                                        },
                                        options: majorOptions,
                                        formatCreateLabel: (inputValue)=>`"${inputValue}" 생성`,
                                        noOptionsMessage: ({ inputValue })=>inputValue ? `"${inputValue}"에 대한 결과가 없습니다.` : '검색어를 입력하세요.',
                                        components: {
                                            DropdownIndicator: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pr-[16px] flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/icon-arrow-24.svg",
                                                        alt: "arrow",
                                                        width: 24,
                                                        height: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, void 0)
                                        },
                                        styles: {
                                            control: (base, state)=>({
                                                    ...base,
                                                    minHeight: '50px',
                                                    borderRadius: '8px',
                                                    borderColor: state.isFocused ? '#D7D8DC' : '#D7D8DC',
                                                    boxShadow: state.isFocused ? 'none' : 'none',
                                                    '&:hover': {
                                                        borderColor: '#D7D8DC'
                                                    },
                                                    cursor: 'text',
                                                    backgroundColor: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }),
                                            valueContainer: (base)=>({
                                                    ...base,
                                                    padding: '6px 0 6px 16px',
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '2px'
                                                }),
                                            placeholder: (base, state)=>({
                                                    ...base,
                                                    fontSize: '15px',
                                                    fontWeight: '400',
                                                    color: '#AFB0B6',
                                                    display: state.selectProps.menuIsOpen ? 'none' : 'block'
                                                }),
                                            input: (base)=>({
                                                    ...base,
                                                    fontSize: '15px',
                                                    fontWeight: '400',
                                                    color: '#36373A',
                                                    margin: '0',
                                                    padding: '0'
                                                }),
                                            multiValue: (base)=>({
                                                    ...base,
                                                    backgroundColor: '#F3F4F6',
                                                    borderRadius: '6px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '4px 8px',
                                                    gap: '4px'
                                                }),
                                            multiValueLabel: (base)=>({
                                                    ...base,
                                                    fontSize: '14px',
                                                    fontWeight: '400',
                                                    color: '#36373A',
                                                    padding: '0',
                                                    paddingLeft: '0'
                                                }),
                                            multiValueRemove: (base)=>({
                                                    ...base,
                                                    color: '#9CA3AF',
                                                    cursor: 'pointer',
                                                    paddingLeft: '4px',
                                                    paddingRight: '0',
                                                    '&:hover': {
                                                        backgroundColor: 'transparent',
                                                        color: '#6B7280'
                                                    }
                                                }),
                                            menu: (base)=>({
                                                    ...base,
                                                    borderRadius: '8px',
                                                    marginTop: '4px',
                                                    border: '1px solid #D7D8DC',
                                                    boxShadow: 'none',
                                                    overflow: 'hidden',
                                                    zIndex: 10
                                                }),
                                            menuList: (base)=>({
                                                    ...base,
                                                    padding: '8px 0'
                                                }),
                                            option: (base, state)=>({
                                                    ...base,
                                                    fontSize: '15px',
                                                    fontWeight: '400',
                                                    cursor: 'pointer',
                                                    backgroundColor: state.isSelected ? '#F6432B' : state.isFocused ? '#F3F4F6' : 'white',
                                                    color: state.isSelected ? 'white' : '#36373A',
                                                    borderRadius: '0',
                                                    padding: '10px 16px',
                                                    '&:active': {
                                                        backgroundColor: '#F3F4F6',
                                                        color: '#36373A'
                                                    }
                                                }),
                                            indicatorSeparator: ()=>({
                                                    display: 'none'
                                                }),
                                            clearIndicator: ()=>({
                                                    display: 'none'
                                                })
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[8px] w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#36373A] text-[13px] font-medium",
                                        children: "최종 모의고사 점수"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 442,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpenScore(true),
                                        className: "w-full h-[48px] px-[16px] py-[10px] border border-[#D7D8DC] rounded-[8px] text-[15px] font-medium text-[var(--n-800)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--n-200)]",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 449,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " 점수 입력"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[12px] w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[8px] w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#36373A] text-[13px] font-medium",
                                                children: "생활기록부 PDF 업로드"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-[var(--n-200)] rounded-[8px] py-[12px] px-[16px] flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[15px] leading-[21px] font-[500]",
                                                        children: uploadedFile?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/icon-close-24.svg",
                                                        alt: "close",
                                                        width: 24,
                                                        height: 24,
                                                        className: "cursor-pointer",
                                                        onClick: handleFileRemove
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: fileInputRef,
                                                        type: "file",
                                                        accept: ".pdf",
                                                        onChange: handleFileChange,
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    !uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleFileUpload,
                                                        className: "rounded-[8px] border border-[var(--n-600)] h-[36px] text-[13px] font-[500] text-[var(--n-800)] max-w-[114px]",
                                                        children: "첨부파일 업로드"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 472,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: 'text-[var(--n-400)] text-[13px] leading-[1.4] font-[400] pl-4 relative before:content-["•"] before:absolute before:left-0',
                                            children: "나이스플러스에서 받은 생활기록부 PDF를 업로드하세요."
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                            lineNumber: 492,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleFileUpload,
                                        className: "rounded-[8px] border border-[var(--n-600)] h-[36px] text-[13px] font-[500] text-[var(--n-800)] max-w-[103px]",
                                        children: "첨부파일 수정"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[1px] bg-[var(--n-200)]"
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                name: "agree",
                                                id: "agree",
                                                checked: agreeTerms,
                                                onChange: (e)=>setAgreeTerms(e.target.checked),
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "agree",
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: agreeTerms ? '/images/checkbox_on.svg' : '/images/checkbox_off.svg',
                                                        alt: "checkbox",
                                                        width: 24,
                                                        height: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[15px] leading-[18px] text-[var(--n-800)]",
                                                        children: "[필수] 개인정보 수집 및 이용 동의"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 517,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[14px] leading-[1.4] text-[var(--n-400)] underline",
                                        children: "보기"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: !isFormValid,
                                className: `${isFormValid ? 'bg-[var(--r-400)] text-white cursor-pointer' : 'bg-[var(--n-100)] text-[var(--n-400)] cursor-not-allowed'} rounded-[8px] h-[48px] w-full`,
                                onClick: ()=>{
                                    if (!isFormValid) return;
                                // TODO: 분석하기 로직
                                },
                                children: "분석하기"
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 540,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f$component$2f$Modal$2f$ModalScoreCenter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpenScore,
                onClose: ()=>setIsOpenScore(false),
                title: "최종 모의고사 점수",
                width: "898px",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] leading-[1.4] font-[400] text-[var(--n-600)] px-[20px] pt-[11px] pb-[17px]",
                        children: "최종 모의고사 점수를 입력해주세요"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                        lineNumber: 562,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[20px] px-[20px] pb-[20px]  max-md:pr-[0]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full overflow-x-auto border-t border-[var(--n-800)] max-md:max-h-[60vh] max-md:overflow-y-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full border-collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                    className: "w-[120px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                    className: "w-[103px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                    className: "w-[103px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                    className: "w-[103px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                    className: "w-[103px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                    className: "w-[103px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                    className: "w-[103px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-[var(--n-50)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-[var(--n-200)] text-left border-l-[0px] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[60px] max-md:min-w-[120px]",
                                                        children: "영역"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]",
                                                        children: "한국사"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]",
                                                        children: "국어"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]",
                                                        children: "수학"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-[var(--n-200)] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[70px] max-md:min-w-[103px]",
                                                        children: "영어"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        colSpan: 2,
                                                        className: "border border-[var(--n-200)] text-left px-[8px] pl-[37px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[100px] max-md:min-w-[206px]",
                                                        children: "탐구"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 597,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "border border-[var(--n-200)] border-r-[0px] px-[8px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] min-w-[100px] max-md:min-w-[103px]",
                                                        children: "제2외국어/한문"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                            lineNumber: 580,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] ",
                                                            children: "선택과목"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] font-[400] text-[var(--n-800)]",
                                                                    children: "화법과 작문"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 619,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] font-[400] text-[var(--n-800)]",
                                                                    children: "문학과 독서"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 635,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[13px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-[4px]  items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] font-[400] text-[var(--n-800)]",
                                                                    children: "경제와법"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-[4px] items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] font-[400] text-[var(--n-800)]",
                                                                    children: "사회 문화"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 699,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] border-r-[0px] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)] ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.korean_subject,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        korean_subject: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] ",
                                                            children: "표준점수"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.korean_standard,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        korean_standard: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.math_standard,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        math_standard: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 750,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-[4px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: scores.inquiry2_standard,
                                                                    onChange: (e)=>setScores({
                                                                            ...scores,
                                                                            inquiry2_standard: e.target.value
                                                                        }),
                                                                    className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 763,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 762,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-[4px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: scores.inquiry2_standard,
                                                                    onChange: (e)=>setScores({
                                                                            ...scores,
                                                                            inquiry2_standard: e.target.value
                                                                        }),
                                                                    className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 779,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 778,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] border-r-[0px] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] ",
                                                            children: "백분위"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 802,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.korean_percentile,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        korean_percentile: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 806,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.math_percentile,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        math_percentile: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 831,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-[4px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: scores.inquiry2_percentile,
                                                                    onChange: (e)=>setScores({
                                                                            ...scores,
                                                                            inquiry2_percentile: e.target.value
                                                                        }),
                                                                    className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 834,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-[4px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: scores.inquiry2_percentile,
                                                                    onChange: (e)=>setScores({
                                                                            ...scores,
                                                                            inquiry2_percentile: e.target.value
                                                                        }),
                                                                    className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] border-r-[0px] px-[8px] py-[8px] text-center text-[14px] text-[var(--n-400)]",
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 864,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] h-[57px] border-l-[0px] px-[8px] py-[8px] text-[14px] font-[500] text-[var(--n-800)] ",
                                                            children: "등급"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 871,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.history_grade,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        history_grade: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 875,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.korean_grade,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        korean_grade: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 885,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.math_grade,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        math_grade: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 895,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 894,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.english_grade,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        english_grade: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 2,
                                                            className: "border border-[var(--n-200)] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-[4px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: scores.inquiry1_grade,
                                                                        onChange: (e)=>setScores({
                                                                                ...scores,
                                                                                inquiry1_grade: e.target.value
                                                                            }),
                                                                        className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                        lineNumber: 919,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: scores.inquiry2_grade,
                                                                        onChange: (e)=>setScores({
                                                                                ...scores,
                                                                                inquiry2_grade: e.target.value
                                                                            }),
                                                                        className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                        lineNumber: 930,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 918,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-[var(--n-200)] border-r-[0px] px-[4px] py-[4px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: scores.second_lang_grade,
                                                                onChange: (e)=>setScores({
                                                                        ...scores,
                                                                        second_lang_grade: e.target.value
                                                                    }),
                                                                className: "w-full px-[8px] py-[4px] text-[14px] text-center border border-[var(--n-200)] rounded-[4px] focus:outline-none focus:border-[var(--n-800)]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                                lineNumber: 944,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                            lineNumber: 943,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                            lineNumber: 608,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 569,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-[8px] items-center justify-start w-full max-md:gap-[6px] max-md:pb-[16px] max-md:pr-[20px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpenScore(false),
                                        className: "px-[24px] py-[10px] flex-1 text-[14px] font-[500] text-[var(--n-600)] border border-[var(--n-300)] h-[52px] rounded-[8px] max-md:px-[16px] max-md:py-[12px] max-md:text-[14px]",
                                        children: "닫기"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 963,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            // TODO: 점수 저장 로직
                                            setIsOpenScore(false);
                                        },
                                        className: "px-[24px] py-[10px] flex-1 text-[14px] font-[500] text-white bg-[var(--n-800)] rounded-[8px] h-[52px] max-md:px-[16px] max-md:py-[12px] max-md:text-[14px]",
                                        children: "저장"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                        lineNumber: 969,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                                lineNumber: 962,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sgview_web/app/(pages)/consult/apply/ConsultApply.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ConsultApply;
}),
];

//# sourceMappingURL=sgview_web_app_1aab3ddb._.js.map