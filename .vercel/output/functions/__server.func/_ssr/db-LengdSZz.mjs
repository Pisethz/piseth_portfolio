import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as defaultProfile } from "./defaults-D_ukbZTg.mjs";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/db-LengdSZz.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var DATA_DIR = process.env.VERCEL === "1" ? "/tmp/data" : join(process.cwd(), "data");
function readJSON(filename, fallback) {
	try {
		const raw = readFileSync(join(DATA_DIR, filename), "utf-8");
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function writeJSON(filename, data) {
	try {
		if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
		writeFileSync(join(DATA_DIR, filename), JSON.stringify(data, null, 2), "utf-8");
	} catch (e) {
		console.error(`[file-store] write failed: ${filename}`, e);
	}
}
function getStoredProfile() {
	return readJSON("profile.json", defaultProfile);
}
function setStoredProfile(data) {
	writeJSON("profile.json", {
		...getStoredProfile(),
		...data
	});
}
function getStoredProjects() {
	return readJSON("projects.json", []);
}
function setStoredProjects(data) {
	writeJSON("projects.json", data);
}
function getStoredAdminHash() {
	return readJSON("admin.json", null);
}
function setStoredAdminHash(hash) {
	writeJSON("admin.json", hash);
}
var getProfile_createServerFn_handler = createServerRpc({
	id: "79d3a7ee01ee68b299337883e8fac8dd70993b26d79a24dfa1faf51c0df90714",
	name: "getProfile",
	filename: "src/lib/db.ts"
}, (opts) => getProfile.__executeServer(opts));
var getProfile = createServerFn({ method: "GET" }).handler(getProfile_createServerFn_handler, async () => {
	return getStoredProfile();
});
var updateProfile_createServerFn_handler = createServerRpc({
	id: "f9d75c7adcf9979ffdb7b89f209c677899b1913ff214e30b9d5c07fd69ebbac4",
	name: "updateProfile",
	filename: "src/lib/db.ts"
}, (opts) => updateProfile.__executeServer(opts));
var updateProfile = createServerFn({ method: "POST" }).validator((d) => d).handler(updateProfile_createServerFn_handler, async ({ data }) => {
	setStoredProfile(data);
	return { success: true };
});
var getProjects_createServerFn_handler = createServerRpc({
	id: "a91fae24c498c2cd9a34a67c28ca641a3a78df627b07ef2517a5347dec43feda",
	name: "getProjects",
	filename: "src/lib/db.ts"
}, (opts) => getProjects.__executeServer(opts));
var getProjects = createServerFn({ method: "GET" }).handler(getProjects_createServerFn_handler, async () => {
	return getStoredProjects();
});
var addProject_createServerFn_handler = createServerRpc({
	id: "eccdad850cfa63a09ea05505878b36c6dde76e10e17bba1e1aa0cad0f56bb413",
	name: "addProject",
	filename: "src/lib/db.ts"
}, (opts) => addProject.__executeServer(opts));
var addProject = createServerFn({ method: "POST" }).validator((d) => d).handler(addProject_createServerFn_handler, async ({ data }) => {
	const projects = getStoredProjects();
	const newProject = {
		...data,
		id: crypto.randomUUID(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	projects.unshift(newProject);
	setStoredProjects(projects);
	return newProject;
});
var updateProject_createServerFn_handler = createServerRpc({
	id: "884899e546b0dcdb7d1b9041c5ef0d7f2c31a394d0642235c6d542eb98e72c85",
	name: "updateProject",
	filename: "src/lib/db.ts"
}, (opts) => updateProject.__executeServer(opts));
var updateProject = createServerFn({ method: "POST" }).validator((d) => d).handler(updateProject_createServerFn_handler, async ({ data }) => {
	setStoredProjects(getStoredProjects().map((p) => p.id === data.id ? {
		...p,
		...data.updates
	} : p));
	return { success: true };
});
var deleteProject_createServerFn_handler = createServerRpc({
	id: "645d57404974914063655ac16f02c03a038f1316d484acf4324dac06f5c15851",
	name: "deleteProject",
	filename: "src/lib/db.ts"
}, (opts) => deleteProject.__executeServer(opts));
var deleteProject = createServerFn({ method: "POST" }).validator((d) => d).handler(deleteProject_createServerFn_handler, async ({ data }) => {
	setStoredProjects(getStoredProjects().filter((p) => p.id !== data));
	return { success: true };
});
var getAdminHash_createServerFn_handler = createServerRpc({
	id: "a9177f0588378f3e2bd9b132829b510714e2b4ad6c5c84c2dd8d08e0abe25d33",
	name: "getAdminHash",
	filename: "src/lib/db.ts"
}, (opts) => getAdminHash.__executeServer(opts));
var getAdminHash = createServerFn({ method: "GET" }).handler(getAdminHash_createServerFn_handler, async () => {
	return getStoredAdminHash();
});
var setAdminHash_createServerFn_handler = createServerRpc({
	id: "a479767ada98e7087c698565005da9bb1feabba25c0d257d8931965660e226ad",
	name: "setAdminHash",
	filename: "src/lib/db.ts"
}, (opts) => setAdminHash.__executeServer(opts));
var setAdminHash = createServerFn({ method: "POST" }).validator((d) => d).handler(setAdminHash_createServerFn_handler, async ({ data }) => {
	setStoredAdminHash(data);
	return { success: true };
});
//#endregion
export { addProject_createServerFn_handler, deleteProject_createServerFn_handler, getAdminHash_createServerFn_handler, getProfile_createServerFn_handler, getProjects_createServerFn_handler, setAdminHash_createServerFn_handler, updateProfile_createServerFn_handler, updateProject_createServerFn_handler };
