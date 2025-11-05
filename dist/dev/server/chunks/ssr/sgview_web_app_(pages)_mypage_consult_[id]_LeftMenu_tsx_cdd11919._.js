module.exports = [
"[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
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
const LeftMenu = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const currentId = params.id;
    const handleMenuClick = (menuId)=>{
        router.push(`/mypage/consult/${menuId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-[16px] w-full",
        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleMenuClick(item.id),
                className: `text-left text-[15px] font-[400] transition-colors ${currentId === item.id ? 'text-[var(--r-400)]' : 'text-[var(--n-800)] hover:text-[var(--r-400)]'}`,
                children: item.label
            }, item.id, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/[id]/LeftMenu.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LeftMenu;
}),
];

//# sourceMappingURL=sgview_web_app_%28pages%29_mypage_consult_%5Bid%5D_LeftMenu_tsx_cdd11919._.js.map