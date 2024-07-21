import * as vscode from "vscode";
import { GitExtension } from "./git";

const version = 1;
const gitExtension = vscode.extensions.getExtension<GitExtension>("vscode.git")?.exports;

export const git = gitExtension?.getAPI(version);
