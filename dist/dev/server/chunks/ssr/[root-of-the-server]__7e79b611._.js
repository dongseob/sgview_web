module.exports = [
"[project]/sgview_web/app/favicon.ico.mjs { IMAGE => \"[project]/sgview_web/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/sgview_web/app/favicon.ico.mjs { IMAGE => \"[project]/sgview_web/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/sgview_web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/sgview_web/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/sgview_web/app/(pages)/mypage/consult/[id]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function generateStaticParams() {
    return [
        {
            id: 'grade-trend'
        },
        {
            id: 'subject-grade'
        },
        {
            id: 'learning-development'
        },
        {
            id: 'creative-activity'
        },
        {
            id: 'behavior-opinion'
        },
        {
            id: 'attendance'
        }
    ];
}
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
const ConsultDetailPage = ({ params })=>{
    const content = contentMap[params.id] || contentMap['subject-grade'];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ConsultDetail, {}, void 0, false, {
            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ConsultDetailPage;
}),
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/sgview_web/app/(pages)/mypage/consult/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e79b611._.js.map