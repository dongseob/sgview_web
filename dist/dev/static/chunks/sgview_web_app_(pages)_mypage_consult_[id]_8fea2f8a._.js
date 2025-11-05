(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const menuItems = [
    {
        id: 'grade-trend',
        label: '교과별 등급추이'
    },
    {
        id: 'subject-grade',
        label: '교과성적'
    },
    {
        id: 'learning-development',
        label: '교과학습발달'
    },
    {
        id: 'creative-activity',
        label: '창의적 체험활동'
    },
    {
        id: 'behavior-opinion',
        label: '행동특성 및 종합의견'
    },
    {
        id: 'attendance',
        label: '출결/자격증/봉사'
    }
];
const LeftMenu = ({ activeSection, onSectionChange })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-[8px] w-full",
        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSectionChange(item.id),
                className: `text-left px-[16px] text-[16px] font-[600] transition-colors ${activeSection === item.id ? 'text-[var(--r-400)]' : 'text-[var(--n-800)] hover:text-[var(--r-400)]'}`,
                children: item.label
            }, item.id, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LeftMenu;
const __TURBOPACK__default__export__ = LeftMenu;
var _c;
__turbopack_context__.k.register(_c, "LeftMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f5b$id$5d2f$LeftMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const contentMap = {
    'grade-trend': {
        title: '교과별 등급추이',
        description: '교과별 등급 추이를 확인할 수 있습니다.'
    },
    'subject-grade': {
        title: '교과성적',
        description: '교과 성적을 확인할 수 있습니다.'
    },
    'learning-development': {
        title: '교과학습발달',
        description: '교과 학습 발달 상황을 확인할 수 있습니다.'
    },
    'creative-activity': {
        title: '창의적 체험활동',
        description: '창의적 체험활동 내역을 확인할 수 있습니다.'
    },
    'behavior-opinion': {
        title: '행동특성 및 종합의견',
        description: '행동특성 및 종합의견을 확인할 수 있습니다.'
    },
    attendance: {
        title: '출결/자격증/봉사',
        description: '출결, 자격증, 봉사활동 내역을 확인할 수 있습니다.'
    }
};
const ConsultDetail = ()=>{
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('subject-grade');
    const content = contentMap[activeSection];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-[24px] max-md:flex-col max-md:gap-[24px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-[270px] flex-shrink-0 max-md:w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f5b$id$5d2f$LeftMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeSection: activeSection,
                    onSectionChange: setActiveSection
                }, void 0, false, {
                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-[32px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-[4px] text-[15px] text-[var(--n-600)] bg-[var(--n-50)] h-[41px] px-[16px] rounded-[1000px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Images/icon-left-arrow-16.svg",
                                        alt: "arrow-left",
                                        width: 16,
                                        height: 16
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[16px] font-[500] text-[var(--n-600)]",
                                        children: "나의 컨설팅"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-[12px] mt-[32px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[26px] font-[700] leading-[1.3] text-[var(--n-800)]",
                                        children: "이*희(고3)"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-[8px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-[16px] py-[8px] text-[15px] font-[500] text-[var(--n-800)] border border-[var(--n-300)] rounded-[100px] h-[40px]",
                                                children: "정보수정"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-[16px] py-[8px] text-[15px] font-[500] text-[var(--r-400)] border border-[var(--r-400)] rounded-[100px] h-[40px]",
                                                children: "삭제"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[8px] text-[15px] text-[var(--n-600)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center justify-center gap-[8px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]",
                                                children: "컨설턴트"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]",
                                                children: "이지나"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-[1px] h-[12px] bg-[var(--n-300)]"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center justify-center gap-[8px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]",
                                                children: "컨설팅"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]",
                                                children: "검토중"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-[1px] h-[12px] bg-[var(--n-300)]"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]",
                                        children: "2025.11.1"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[1px] bg-[var(--n-200)] mb-[32px]"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-[32px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                                        children: "주요 교과 성적"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto border-t-[var(--n-800)] border-t",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full border-collapse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "132px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "79px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-[var(--n-50)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] text-left border-t-0 border-l-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "분류"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "전교과"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[90px]",
                                                                children: "국영수사과"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "국영수A"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "국영수B"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "국수영"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "국영사"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "국영과"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "국영"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "수과"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        '1학년 1학기',
                                                        '1학년 2학기',
                                                        '1학년 전체',
                                                        '2학년 1학기',
                                                        '2학년 2학기',
                                                        '2학년 전체',
                                                        '3학년 1학기',
                                                        '3학년 전체'
                                                    ].map((period, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] border-l-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-left",
                                                                    children: period
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                [
                                                                    ...Array(9)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: `border border-[var(--n-200)] px-[12px] py-[10px] text-[14px] font-[400] text-[var(--n-800)] text-center ${i === 8 ? 'border-r-0' : ''}`,
                                                                        children: i === 0 ? '3.00' : '3.10'
                                                                    }, i, false, {
                                                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-[1px] bg-[var(--n-200)] mb-[32px]"
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-[32px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                                        children: "전체 내신 성적"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[16px] font-[400] leading-[1.4] text-[var(--n-600)] mb-[24px]",
                                        children: "공통과목, 일반선택과목"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto border-t-[var(--n-800)] border-t",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full border-collapse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "132px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "71px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-[var(--n-50)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-l-0 text-left px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "교과"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 text-left px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "과목"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                                children: "학년"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                                children: "학기"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "단위수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "평점수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "원점수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "표준편차"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "성취도"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "수강자수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-r-0  px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "석차등급"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '사회(역사/도덕등)',
                                                            course: '통합사회',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '사회(역사/도덕등)',
                                                            course: '통합사회',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '사회(역사/도덕등)',
                                                            course: '통합사회',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '국어',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '가족가정/제2외국어/한문/교양',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        },
                                                        {
                                                            subject: '가족가정/제2외국어/한문/교양',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            avg: '84',
                                                            raw: '79.4',
                                                            std: '13.2',
                                                            achievement: 'A',
                                                            students: '212',
                                                            rank: '3'
                                                        }
                                                    ].map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left",
                                                                    children: row.subject
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left",
                                                                    children: row.course
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 500,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.grade
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.semester
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 506,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.credit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 509,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.avg
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.raw
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 515,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.std
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.achievement
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.students
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 524,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.rank
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-[32px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                                        children: "체육·예술과목"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 539,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto border-t-[var(--n-800)] border-t",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full border-collapse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "132px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "142px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 546,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "142px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "142px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "142px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "142px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-[var(--n-50)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-l-0 text-center px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                                children: "교과"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 text-center px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                                children: "과목"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                                children: "학년"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                                children: "학기"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "단위수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "성취도"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        {
                                                            subject: '체육',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            achievement: 'A'
                                                        },
                                                        {
                                                            subject: '체육',
                                                            course: '국어',
                                                            grade: '1',
                                                            semester: '1',
                                                            credit: '4',
                                                            achievement: 'A'
                                                        },
                                                        {
                                                            subject: '체육',
                                                            course: '문학과 산책',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '4',
                                                            achievement: 'A'
                                                        },
                                                        {
                                                            subject: '체육',
                                                            course: '국어',
                                                            grade: '3',
                                                            semester: '1',
                                                            credit: '4',
                                                            achievement: 'A'
                                                        },
                                                        {
                                                            subject: '체육',
                                                            course: '국어',
                                                            grade: '3',
                                                            semester: '1',
                                                            credit: '4',
                                                            achievement: 'A'
                                                        }
                                                    ].map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center",
                                                                    children: row.subject
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.course
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 621,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.grade
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 624,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.semester
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 627,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.credit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 630,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.achievement
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 633,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 542,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 538,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-[32px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                                        children: "진로선택과목"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 645,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto border-t-[var(--n-800)] border-t",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full border-collapse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "107px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 656,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 657,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "70px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                                            width: "180px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-[var(--n-50)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-l-0 text-left px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                                children: "교과"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 text-left px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                                children: "과목"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                                children: "학년"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                                children: "학기"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 673,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "단위수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "평점수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "과목표준"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                                children: "성취도"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 685,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                                children: "수강자수"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left min-w-[80px]",
                                                                children: "성취도별 분포 비율"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        {
                                                            subject: '계열',
                                                            course: '생명과학 과학',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '2',
                                                            avg: '100',
                                                            std: '80.5',
                                                            achievement: 'A',
                                                            students: '172',
                                                            distribution: 'A(54.5) B(26.7) C(8.7)'
                                                        },
                                                        {
                                                            subject: '계열',
                                                            course: '생명과학 과학',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '2',
                                                            avg: '100',
                                                            std: '80.5',
                                                            achievement: 'A',
                                                            students: '172',
                                                            distribution: 'A(54.5) B(26.7) C(8.7)'
                                                        },
                                                        {
                                                            subject: '계열',
                                                            course: '생명과학 과학',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '2',
                                                            avg: '100',
                                                            std: '80.5',
                                                            achievement: 'A',
                                                            students: '172',
                                                            distribution: 'A(54.5) B(26.7) C(8.7)'
                                                        },
                                                        {
                                                            subject: '계열',
                                                            course: '생명과학 과학',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '2',
                                                            avg: '100',
                                                            std: '80.5',
                                                            achievement: 'A',
                                                            students: '172',
                                                            distribution: 'A(54.5) B(26.7) C(8.7)'
                                                        },
                                                        {
                                                            subject: '계열',
                                                            course: '생명과학 과학',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '2',
                                                            avg: '100',
                                                            std: '80.5',
                                                            achievement: 'A',
                                                            students: '172',
                                                            distribution: 'A(54.5) B(26.7) C(8.7)'
                                                        },
                                                        {
                                                            subject: '계열',
                                                            course: '생명과학 과학',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '2',
                                                            avg: '100',
                                                            std: '80.5',
                                                            achievement: 'A',
                                                            students: '172',
                                                            distribution: 'A(54.5) B(26.7) C(8.7)'
                                                        },
                                                        {
                                                            subject: '계열',
                                                            course: '생명과학 과학',
                                                            grade: '2',
                                                            semester: '1',
                                                            credit: '2',
                                                            avg: '100',
                                                            std: '80.5',
                                                            achievement: 'A',
                                                            students: '172',
                                                            distribution: 'A(54.5) B(26.7) C(8.7)'
                                                        }
                                                    ].map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] border-l-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left",
                                                                    children: row.subject
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 784,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left",
                                                                    children: row.course
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.grade
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 790,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.semester
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 793,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.credit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 796,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.avg
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.std
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.achievement
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                                    children: row.students
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 808,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left",
                                                                    children: row.distribution
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                                    lineNumber: 811,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                            lineNumber: 783,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                    lineNumber: 696,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                            lineNumber: 649,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 648,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConsultDetail, "KoC6bbbhQQlcbj+5/I2ekzLc310=");
_c = ConsultDetail;
const __TURBOPACK__default__export__ = ConsultDetail;
var _c;
__turbopack_context__.k.register(_c, "ConsultDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sgview_web_app_%28pages%29_mypage_consult_%5Bid%5D_8fea2f8a._.js.map