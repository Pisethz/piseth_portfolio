import { i as __toESM, t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CrHL9HDt.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-context-BueZHICK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getProfile = createServerFn({ method: "GET" }).handler(createSsrRpc("79d3a7ee01ee68b299337883e8fac8dd70993b26d79a24dfa1faf51c0df90714"));
var updateProfile = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("f9d75c7adcf9979ffdb7b89f209c677899b1913ff214e30b9d5c07fd69ebbac4"));
var getProjects = createServerFn({ method: "GET" }).handler(createSsrRpc("a91fae24c498c2cd9a34a67c28ca641a3a78df627b07ef2517a5347dec43feda"));
var addProject = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("eccdad850cfa63a09ea05505878b36c6dde76e10e17bba1e1aa0cad0f56bb413"));
var updateProject = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("884899e546b0dcdb7d1b9041c5ef0d7f2c31a394d0642235c6d542eb98e72c85"));
var deleteProject = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("645d57404974914063655ac16f02c03a038f1316d484acf4324dac06f5c15851"));
var getAdminHash = createServerFn({ method: "GET" }).handler(createSsrRpc("a9177f0588378f3e2bd9b132829b510714e2b4ad6c5c84c2dd8d08e0abe25d33"));
var setAdminHash = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("a479767ada98e7087c698565005da9bb1feabba25c0d257d8931965660e226ad"));
var SESSION_KEY = "portfolio-admin-session";
async function hash(text) {
	const buf = new TextEncoder().encode(text);
	const digest = await crypto.subtle.digest("SHA-256", buf);
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var AdminContext = (0, import_react.createContext)(null);
function AdminProvider({ children }) {
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [hasPassword, setHasPassword] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		setIsAdmin(sessionStorage.getItem(SESSION_KEY) === "1");
		getAdminHash().then((h) => {
			setHasPassword(!!h);
		}).catch(console.error);
	}, []);
	const setPassword = (0, import_react.useCallback)(async (pwd) => {
		await setAdminHash({ data: await hash(pwd) });
		sessionStorage.setItem(SESSION_KEY, "1");
		setHasPassword(true);
		setIsAdmin(true);
	}, []);
	const login = (0, import_react.useCallback)(async (pwd) => {
		const stored = await getAdminHash();
		if (!stored) return false;
		if (await hash(pwd) === stored) {
			sessionStorage.setItem(SESSION_KEY, "1");
			setIsAdmin(true);
			return true;
		}
		return false;
	}, []);
	const logout = (0, import_react.useCallback)(() => {
		sessionStorage.removeItem(SESSION_KEY);
		setIsAdmin(false);
	}, []);
	const changePassword = (0, import_react.useCallback)(async (oldPwd, newPwd) => {
		const stored = await getAdminHash();
		if (stored) {
			if (await hash(oldPwd) !== stored) return false;
		}
		await setAdminHash({ data: await hash(newPwd) });
		return true;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminContext.Provider, {
		value: {
			isAdmin,
			hasPassword,
			setPassword,
			login,
			logout,
			changePassword
		},
		children
	});
}
function useAdmin() {
	const ctx = (0, import_react.useContext)(AdminContext);
	if (!ctx) throw new Error("useAdmin must be used within an AdminProvider");
	return ctx;
}
//#endregion
export { getProjects as a, useAdmin as c, getProfile as i, addProject as n, updateProfile as o, deleteProject as r, updateProject as s, AdminProvider as t };
