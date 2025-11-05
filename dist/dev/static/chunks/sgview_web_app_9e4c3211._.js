(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sgview_web/app/component/Modal/ModalNoClose.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
/**
 * 중앙 모달 - 섬모양
 */ const ModalNoClose = ({ isOpen, onClose, title, children, height = 'auto', footer, width })=>{
    _s();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ESC 키로 모달 닫기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalNoClose.useEffect": ()=>{
            const handleKeyDown = {
                "ModalNoClose.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape' && isOpen) {
                        onClose();
                    }
                }
            }["ModalNoClose.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "ModalNoClose.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["ModalNoClose.useEffect"];
        }
    }["ModalNoClose.useEffect"], [
        isOpen,
        onClose
    ]);
    // 모달 외부 클릭 시 닫기
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalNoClose.useEffect": ()=>{
            const handleOutsideClick = {
                "ModalNoClose.useEffect.handleOutsideClick": (e)=>{
                    if (modalRef.current && !modalRef.current.contains(e.target) && isOpen) {
                        onClose();
                    }
                }
            }["ModalNoClose.useEffect.handleOutsideClick"];
            document.addEventListener('mousedown', handleOutsideClick);
            return ({
                "ModalNoClose.useEffect": ()=>document.removeEventListener('mousedown', handleOutsideClick)
            })["ModalNoClose.useEffect"];
        }
    }["ModalNoClose.useEffect"], [
        isOpen,
        onClose
    ]);
    // 모달 열릴 때 스크롤 방지
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalNoClose.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    }["ModalNoClose.useEffect"], [
        isOpen
    ]);
    // 모달이 닫혀있으면 렌더링하지 않음
    if (!isOpen) return null;
    // createPortal을 사용하여 모달을 body 바로 아래에 렌더링
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50",
        onClick: onClose,
        role: "dialog",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: modalRef,
            className: " bg-white rounded-xl text-base leading-5 z-20 relative overflow-hidden w-[480px] max-1024:!w-[calc(100%-64px)]",
            style: {
                height,
                maxHeight: '90vh',
                width: width
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between relative px-[20px] pb-[12px] pt-[20px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-center text-[20px] font-[700] leading-[1.3] text-[var(--n-800)] w-full",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/component/Modal/ModalNoClose.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sgview_web/app/component/Modal/ModalNoClose.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/sgview_web/app/component/Modal/ModalNoClose.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sgview_web/app/component/Modal/ModalNoClose.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), document.body);
};
_s(ModalNoClose, "S0kEBwDghbe+1BsR9jPHd4ncGXM=");
_c = ModalNoClose;
const __TURBOPACK__default__export__ = ModalNoClose;
var _c;
__turbopack_context__.k.register(_c, "ModalNoClose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f$component$2f$Modal$2f$ModalNoClose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/app/component/Modal/ModalNoClose.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ConsultListItem = ({ date, name, consultant, consulting })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[270px] max-md:w-full h-auto py-[24px] border border-[var(--n-200)] rounded-[12px] p-[20px] flex flex-col items-start justify-start gap-[24px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start justify-start w-full gap-[20px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start justify-start w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] leading-[1.4] font-[400] text-[var(--n-400)]",
                                    children: "생기부 컨설팅"
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-[61px] h-[29px] flex items-center justify-center text-[13px] font-[500] rounded-[32px] ${consulting === 'cancel' ? 'bg-[#FFF4F4] text-[#F3615B]' : consulting === 'complete' ? 'bg-[#CEE9D4] text-[#006E18]' : consulting === 'in-progress' ? 'bg-[#EFF0F5] text-[#8B95A1]' : consulting === 'submitted' ? 'bg-[#F7F8FC] text-[var(--n-800)] border border-[#E4E6EA]' : ''}`,
                                    children: consulting === 'cancel' ? '신청취소' : consulting === 'complete' ? '검토완료' : consulting === 'in-progress' ? '진행중' : consulting === 'submitted' ? '신청완료' : ''
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start justify-start w-full gap-[12px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[18px] leading-[1.5] font-[700] text-[var(--n-800)]",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start justify-start gap-[8px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[16px] leading-[1.4] font-[400] text-[var(--n-500)]",
                                        children: "컨설턴트 미배정"
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] leading-[20px] font-[400] text-[var(--n-500)]",
                                        children: date
                                    }, void 0, false, {
                                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-start gap-[12px] w-full",
                children: [
                    consulting !== 'complete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-[15px] font-[500] text-[var(--n-800)] h-[48px] w-full rounded-[8px] border border-[var(--n-200)] ",
                        children: "생활기록부 확인"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    consulting === 'complete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-[15px] font-[500]  bg-[var(--r-400)] text-[var(--n-0)] h-[48px] w-full rounded-[8px]  ",
                        children: "진단 결과"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f$component$2f$Modal$2f$ModalNoClose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "정말로 삭제하시겠습니까?",
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                width: "288px",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center gap-[12px] px-[20px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-[400] leading-[1.5] text-[var(--n-500)] text-center",
                            children: "삭제시 작성된 생활기록부 정보 및 진단 내역이 삭제됩니다."
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-[12px] w-full pb-[20px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-[15px] font-[500] text-[var(--n-800)] h-[48px] w-full rounded-[8px] border border-[var(--n-200)] w-[120px]",
                                    children: "취소"
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-[15px] font-[500] bg-[var(--r-400)] text-[var(--n-0)] h-[48px] w-full rounded-[8px] w-[120px]",
                                    children: "삭제"
                                }, void 0, false, {
                                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConsultListItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = ConsultListItem;
const __TURBOPACK__default__export__ = ConsultListItem;
var _c;
__turbopack_context__.k.register(_c, "ConsultListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f$ConsultListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sgview_web/app/(pages)/mypage/consult/ConsultListItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ConsultList = ()=>{
    _s();
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 4; // 페이지당 아이템 수
    const consultList = [
        {
            id: 1,
            date: '2025.10.31',
            name: '이*희(고3)',
            consultant: '미배정',
            consulting: 'cancel'
        },
        {
            id: 2,
            date: '2025.10.31',
            name: '김*지(고3)',
            consultant: '미배정',
            consulting: 'in-progress'
        },
        {
            id: 3,
            date: '2025.10.31',
            name: '이*희(고2)',
            consultant: '김하늘',
            consulting: 'complete'
        },
        {
            id: 4,
            date: '2025.10.31',
            name: '최*준(고3)',
            consultant: '미배정',
            consulting: 'submitted'
        },
        {
            id: 5,
            date: '2025.10.31',
            name: '이*희(고1)',
            consultant: '김하늘',
            consulting: 'submitted'
        },
        {
            id: 6,
            date: '2025.10.30',
            name: '박*민(고3)',
            consultant: '이서연',
            consulting: 'complete'
        },
        {
            id: 7,
            date: '2025.10.29',
            name: '최*수(고2)',
            consultant: '미배정',
            consulting: 'in-progress'
        },
        {
            id: 8,
            date: '2025.10.28',
            name: '정*아(고3)',
            consultant: '김하늘',
            consulting: 'submitted'
        }
    ];
    // 페이지네이션 계산
    const totalPages = Math.ceil(consultList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = consultList.slice(startIndex, endIndex);
    // 페이지 변경 핸들러
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-[40px] pb-[120px] max-w-[1440px] max-md:pt-[32px] max-md:pb-[32px] max-md:px-[20px] max-md:min-w-[375px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full mx-auto flex flex-col items-center justify-start gap-[32px] px-[144px] max-md:px-[20px] max-md:flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "items-center justify-center gap-[12px] max-md:items-center max-md:justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[28px] font-[700] leading-[1.3] text-[var(--n-800)] text-center",
                        children: "나의 컨설팅"
                    }, void 0, false, {
                        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-start justify-start gap-[24px]",
                    children: currentItems.map((item)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$app$2f28$pages$292f$mypage$2f$consult$2f$ConsultListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            date: item.date,
                            name: item.name,
                            consultant: item.consultant,
                            consulting: item.consulting
                        }, item.id + item.name, false, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-[4px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePageChange(currentPage - 1),
                            disabled: currentPage === 1,
                            className: `w-[24px] h-[24px] flex items-center justify-center rounded-[8px] ${currentPage === 1 ? ' cursor-not-allowed' : 'cursor-pointer hover:bg-[var(--n-50)]'}`,
                            children: currentPage === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/icon-left-gray.svg",
                                alt: "prev",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/icon_right_red.svg",
                                alt: "prev",
                                width: 24,
                                height: 24,
                                className: "rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        Array.from({
                            length: totalPages
                        }, (_, i)=>i + 1).map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handlePageChange(page),
                                className: `w-[24px] h-[24px] flex items-center justify-center rounded-[8px] text-[15px] font-[500] transition-colors ${currentPage === page ? 'bg-[var(--r-400)] text-white' : 'text-[var(--n-600)] hover:bg-[var(--n-50)]'}`,
                                children: page
                            }, page, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePageChange(currentPage + 1),
                            disabled: currentPage === totalPages,
                            className: `w-[24px] h-[24px] flex items-center justify-center rounded-[8px] ${currentPage === totalPages ? ' cursor-not-allowed' : 'cursor-pointer hover:bg-[var(--n-50)]'}`,
                            children: currentPage === totalPages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/icon-left-gray.svg",
                                alt: "next",
                                width: 24,
                                height: 24,
                                className: "rotate-180"
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sgview_web$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/icon_right_red.svg",
                                alt: "next",
                                width: 24,
                                height: 24
                            }, void 0, false, {
                                fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/sgview_web/app/(pages)/mypage/consult/ConsultList.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ConsultList, "6xAUoJ2motYJ38x4zeUWisA+X/4=");
_c = ConsultList;
const __TURBOPACK__default__export__ = ConsultList;
var _c;
__turbopack_context__.k.register(_c, "ConsultList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sgview_web_app_9e4c3211._.js.map