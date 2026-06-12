#!/usr/bin/env bash
# Precompiles the JSX scene/app sources into a single plain-JS bundle (src/bundle.js)
# so the browser does NOT have to download Babel or transpile on every visit.
#
# Edit the sources in src/*.jsx, then run:  ./build.sh
# Requires macOS JavaScriptCore (jsc) — no Node needed.
set -euo pipefail
cd "$(dirname "$0")"

JSC=/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc
BABEL=/tmp/babel.min.js

[ -x "$JSC" ] || { echo "jsc not found at $JSC"; exit 1; }
[ -f "$BABEL" ] || curl -sSL "https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" -o "$BABEL"

cat > /tmp/_build.js <<'EOF'
globalThis.self = globalThis;
globalThis.console = { log:function(){}, warn:function(){}, error:function(){}, debug:function(){}, info:function(){} };
load('/tmp/babel.min.js');
var files = ['src/data.jsx','src/robots.jsx','src/world.jsx','src/scenes-pages.jsx','src/globe.jsx','src/app-all.jsx'];
var out = "// AUTO-GENERATED BUNDLE — do not edit. Edit src/*.jsx then run ./build.sh\n";
files.forEach(function(f){
  out += "\n/* ===== " + f + " ===== */\n" + Babel.transform(read(f), { presets: ['react'] }).code + "\n";
});
print(out);
EOF

"$JSC" /tmp/_build.js > src/bundle.js
echo "✅ src/bundle.js — $(wc -l < src/bundle.js) lines, $(wc -c < src/bundle.js) bytes"
