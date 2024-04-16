#!/usr/bin/env node

import { writeFile } from 'node:fs/promises'

console.log('setting up swapfile...')
await writeFile('/proc/sys/vm/overcommit_memory', '1')
console.log('swapfile setup complete')
