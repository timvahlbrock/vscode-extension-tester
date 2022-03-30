import { spawn } from "child_process";

const args = process.argv;

const vscBin = args[2];
const vscArgs = args.slice(3).map(arg => arg.replace('extensiondevelopmentpath', 'extensionDevelopmentPath'));

const vsc = spawn(vscBin, vscArgs);

vsc.stdout.pipe(process.stdout);
vsc.stderr.pipe(process.stderr);

vsc.on('close', function(code) {
    console.log("Process is exiting with exit code " + code);
    process.exit(code || 0);
});

vsc.on('error', console.error);
