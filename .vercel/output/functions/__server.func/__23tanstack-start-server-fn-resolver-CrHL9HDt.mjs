import { createRequire } from "node:module";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-CrHL9HDt.js
var manifest = {
	"645d57404974914063655ac16f02c03a038f1316d484acf4324dac06f5c15851": {
		functionName: "deleteProject_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	},
	"79d3a7ee01ee68b299337883e8fac8dd70993b26d79a24dfa1faf51c0df90714": {
		functionName: "getProfile_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	},
	"884899e546b0dcdb7d1b9041c5ef0d7f2c31a394d0642235c6d542eb98e72c85": {
		functionName: "updateProject_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	},
	"a479767ada98e7087c698565005da9bb1feabba25c0d257d8931965660e226ad": {
		functionName: "setAdminHash_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	},
	"a9177f0588378f3e2bd9b132829b510714e2b4ad6c5c84c2dd8d08e0abe25d33": {
		functionName: "getAdminHash_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	},
	"a91fae24c498c2cd9a34a67c28ca641a3a78df627b07ef2517a5347dec43feda": {
		functionName: "getProjects_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	},
	"eccdad850cfa63a09ea05505878b36c6dde76e10e17bba1e1aa0cad0f56bb413": {
		functionName: "addProject_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	},
	"f9d75c7adcf9979ffdb7b89f209c677899b1913ff214e30b9d5c07fd69ebbac4": {
		functionName: "updateProfile_createServerFn_handler",
		importer: () => import("./_ssr/db-LengdSZz.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { __toESM as i, __commonJSMin as n, __require as r, getServerFnById as t };
