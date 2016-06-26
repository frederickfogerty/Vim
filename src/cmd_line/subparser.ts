"use strict";

import { parseQuitCommandArgs } from './subparsers/quit';
import { parseWriteCommandArgs } from './subparsers/write';
// import { parseIMapCommandArgs } from './subparsers/imap'

// maps command names to parsers for said commands.
export const commandParsers = {
    w: parseWriteCommandArgs,
    write: parseWriteCommandArgs,

    quit: parseQuitCommandArgs,
    q: parseQuitCommandArgs,
    // imap: parseIMapCommandArgs,
};
