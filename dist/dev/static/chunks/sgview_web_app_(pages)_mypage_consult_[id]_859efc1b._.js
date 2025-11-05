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
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SubjectGrade = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[24px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                children: "교과성적"
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[32px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                        children: "주요 교과 성적"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 10,
                        columnNumber: 9
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
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "79px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[var(--n-50)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] text-left border-t-0 border-l-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "분류"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "전교과"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[90px]",
                                                children: "국영수사과"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "국영수A"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "국영수B"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "국수영"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "국영사"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "국영과"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "국영"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[12px] py-[10px] text-[14px] font-[600] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "수과"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
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
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                [
                                                    ...Array(9)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: `border border-[var(--n-200)] px-[12px] py-[10px] text-[14px] font-[400] text-[var(--n-800)] text-center ${i === 8 ? 'border-r-0' : ''}`,
                                                        children: i === 0 ? '3.00' : '3.10'
                                                    }, i, false, {
                                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[1px] bg-[var(--n-200)] mb-[32px]"
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[32px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                        children: "전체 내신 성적"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[16px] font-[400] leading-[1.4] text-[var(--n-600)] mb-[24px]",
                        children: "공통과목, 일반선택과목"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 100,
                        columnNumber: 9
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
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "71px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[var(--n-50)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-l-0 text-left px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "교과"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 text-left px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "과목"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                children: "학년"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                children: "학기"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "단위수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "평점수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "원점수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "표준편차"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "성취도"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "수강자수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-r-0  px-[12px] py-[10px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "석차등급"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
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
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left",
                                                    children: row.course
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.semester
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.credit
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.avg
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.raw
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.std
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.achievement
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.students
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.rank
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[32px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                        children: "체육·예술과목"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 435,
                        columnNumber: 9
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
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 441,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "142px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "142px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 443,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "142px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "142px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "142px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 446,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[var(--n-50)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-l-0 text-center px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                children: "교과"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 text-center px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                children: "과목"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 453,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                children: "학년"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                children: "학기"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 459,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "단위수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "성취도"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                        lineNumber: 449,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
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
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.course
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.semester
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.credit
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.achievement
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 513,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[32px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[16px] font-[500] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                        children: "진로선택과목"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 541,
                        columnNumber: 9
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
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 547,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "107px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 548,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "70px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "70px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 550,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "70px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "70px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 552,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "70px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "70px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "70px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 555,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            width: "180px"
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 556,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[var(--n-50)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-l-0 text-left px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                children: "교과"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 text-left px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] min-w-[80px]",
                                                children: "과목"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                children: "학년"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[60px]",
                                                children: "학기"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "단위수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "평점수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 575,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "과목표준"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 578,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[70px]",
                                                children: "성취도"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 581,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center min-w-[80px]",
                                                children: "수강자수"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-[var(--n-200)] border-t-0 border-r-0 px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left min-w-[80px]",
                                                children: "성취도별 분포 비율"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                lineNumber: 587,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 558,
                                    columnNumber: 13
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
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left",
                                                    children: row.course
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.grade
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.semester
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.credit
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.avg
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.std
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.achievement
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-center",
                                                    children: row.students
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 704,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-[var(--n-200)] border-r-0 px-[8px] py-[12px] text-[14px] font-[400] text-[var(--n-800)] text-left",
                                                    children: row.distribution
                                                }, void 0, false, {
                                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
                lineNumber: 540,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SubjectGrade;
const __TURBOPACK__default__export__ = SubjectGrade;
var _c;
__turbopack_context__.k.register(_c, "SubjectGrade");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f5b$id$5d2f$SubjectGrade$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/app/(pages)/mypage/consult/[id]/SubjectGrade.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// 학년별 테이블 컴포넌트
const GradeTable = ({ grade })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const subjects = [
        {
            name: '(1학기)국어',
            content: '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.'
        },
        {
            name: '(2학기)국어',
            content: '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.'
        },
        {
            name: '수학',
            content: '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.'
        },
        {
            name: '영어',
            content: '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.'
        },
        {
            name: '한국사',
            content: '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.'
        },
        {
            name: '통합사회',
            content: '인간이 바로 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서일지를 작성함. 실제 책을 고치기 또 글을 통해 그들이 다양한 체숙 수업을 준비하는 것을 보고 그들의 노력에 깊이를 표하며 글을 작성함. 또한 다양한 유형의 담화·글·작품을 듣고 읽거나 쓰고 말하면서 폭넓은 지식을 습득하고 적극적으로 사고하며 상호 이해와 소통하는 태도를 지닌다.'
        },
        {
            name: '통합과과학',
            content: '언제나 바른 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서 일지를 작성함. 실제 체육 교사가 쓴 글을 통해 그들이 다양한 체육 수업을 준비하는 것을 보고 그들의 노력에 경이를 표하며 꿈을 위해 자신의 마음을 다잡는 모습을 보임. 고등학교 생활을 소재로 수업 시간에 배운 다양한 표현 기법을 활용하여 시를 창작함. 앞으로 학교 생활을 충실히 하여 밝은 미래로 나아가고 싶다는 희망적인 내용을 형상화하여 학교에 대한 긍정적인 관점을 엿볼 수 있는 것이 인상적임. '
        },
        {
            name: '과학탐구실험',
            content: '언제나 바른 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서 일지를 작성함. 실제 체육 교사가 쓴 글을 통해 그들이 다양한 체육 수업을 준비하는 것을 보고 그들의 노력에 경이를 표하며 꿈을 위해 자신의 마음을 다잡는 모습을 보임. 고등학교 생활을 소재로 수업 시간에 배운 다양한 표현 기법을 활용하여 시를 창작함. 앞으로 학교 생활을 충실히 하여 밝은 미래로 나아가고 싶다는 희망적인 내용을 형상화하여 학교에 대한 긍정적인 관점을 엿볼 수 있는 것이 인상적임. '
        },
        {
            name: '(1학기)국어',
            content: '언제나 바른 자세로 앉아 수업을 경청하는 모습이 인상적인 학생으로 자신의 진로와 관련하여 스스로 책을 선정하여 읽으며 독서 일지를 작성함. 실제 체육 교사가 쓴 글을 통해 그들이 다양한 체육 수업을 준비하는 것을 보고 그들의 노력에 경이를 표하며 꿈을 위해 자신의 마음을 다잡는 모습을 보임. 고등학교 생활을 소재로 수업 시간에 배운 다양한 표현 기법을 활용하여 시를 창작함. 앞으로 학교 생활을 충실히 하여 밝은 미래로 나아가고 싶다는 희망적인 내용을 형상화하여 학교에 대한 긍정적인 관점을 엿볼 수 있는 것이 인상적임. '
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-[32px]",
        children: [
            grade !== '1학년' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[1px] bg-[var(--n-200)] mb-[32px]"
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full flex items-center justify-between mb-[24px]  rounded-t-[8px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[20px] font-[600] text-[var(--n-800)]",
                        children: grade
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Images/icon-arrow-24.svg",
                        alt: "arrow",
                        width: 24,
                        height: 24,
                        className: `transition-transform ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " border-t border-[var(--n-800)] rounded-b-[8px] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-collapse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[var(--n-50)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border-b border-[var(--n-200)] px-[16px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-left w-[130px]",
                                        children: "과목"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "border-b border-[var(--n-200)] px-[16px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] text-center",
                                        children: "세부능력 및 특기사항"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: subjects.map((subject, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `border border-l-0 border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[500] text-[var(--n-800)] align-top`,
                                            children: subject.name
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `
                      border border-l-0 border-[var(--n-200)] px-[8px] py-[12px] text-[14px] font-[400] leading-[1.6] text-[var(--n-600)]`,
                                            children: subject.content
                                        }, void 0, false, {
                                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GradeTable, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");
_c = GradeTable;
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
    _s1();
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
                    lineNumber: 152,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 151,
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
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[16px] font-[500] text-[var(--n-600)]",
                                        children: "나의 컨설팅"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 161,
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
                                        lineNumber: 175,
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
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-[16px] py-[8px] text-[15px] font-[500] text-[var(--r-400)] border border-[var(--r-400)] rounded-[100px] h-[40px]",
                                                children: "삭제"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 174,
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
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]",
                                                children: "이지나"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-[1px] h-[12px] bg-[var(--n-300)]"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 198,
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
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-800)]",
                                                children: "검토중"
                                            }, void 0, false, {
                                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-[1px] h-[12px] bg-[var(--n-300)]"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[15px] font-[500] leading-[1.4] text-[var(--n-500)]",
                                        children: "2025.11.1"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-[1px] bg-[var(--n-200)] mb-[32px]"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeSection === 'subject-grade' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f5b$id$5d2f$SubjectGrade$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 218,
                        columnNumber: 47
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeSection === 'learning-development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] mb-[24px]",
                                children: content.title
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                '1학년',
                                '2학년',
                                '3학년'
                            ].map((grade, gradeIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GradeTable, {
                                    grade: grade
                                }, gradeIndex, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/ConsultDetail.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ConsultDetail, "KoC6bbbhQQlcbj+5/I2ekzLc310=");
_c1 = ConsultDetail;
const __TURBOPACK__default__export__ = ConsultDetail;
var _c, _c1;
__turbopack_context__.k.register(_c, "GradeTable");
__turbopack_context__.k.register(_c1, "ConsultDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sgview_web_app_%28pages%29_mypage_consult_%5Bid%5D_859efc1b._.js.map