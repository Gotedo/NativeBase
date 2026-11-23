#!/bin/sh
# Run the current React 19 compatibility suite; historical Storyshots fixtures are archived.
set -eu
cd "$(dirname "$0")/../.."
npm test -- --runInBand "$@"
