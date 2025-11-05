(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f5b$id$5d2f$LeftMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
        className: "flex gap-[40px] max-md:flex-col max-md:gap-[24px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-[200px] flex-shrink-0 max-md:w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f5b$id$5d2f$LeftMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeSection: activeSection,
                    onSectionChange: setActiveSection
                }, void 0, false, {
                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[26px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                        children: content.title
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-[8px] border border-[var(--n-200)] p-[24px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] text-[var(--n-600)]",
                            children: content.description
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
        lineNumber: 38,
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

//# sourceMappingURL=sgview_web_app_%28pages%29_mypage_consult_%5Bid%5D_ConsultDetail_tsx_faa18c54._.js.map