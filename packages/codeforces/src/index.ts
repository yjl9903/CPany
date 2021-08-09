import axios from 'axios';

import { IPlugin } from '@cpany/core';

import { contestListPlugin, gymContestListPlugin } from './contest';
import { handleInfoPlugin } from './handle';

interface ICodeforcesPluginOption {
  baseUrl?: string;
  timeout?: number;
}

export function codeforcesPlugin(
  option: ICodeforcesPluginOption = {}
): IPlugin[] {
  const api = axios.create({
    baseURL: option.baseUrl ?? 'https://codeforces.com/api/',
    timeout: option.timeout ?? 30 * 1000
  });

  return [
    contestListPlugin(api),
    gymContestListPlugin(api),
    handleInfoPlugin(api)
  ];
}
