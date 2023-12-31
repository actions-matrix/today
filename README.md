# today
A small utility to get today date as action outputs

## Usage

```yaml
name: Build

on:
  push:
    branches:
      - main

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - id: today
        uses: actions-matrix/today@main
      - id: release
        uses: actions-matrix/release-matrix-action@v1
        with:
          search: "nginx"
          date: ${{ steps.today.outputs.year }}
    outputs:
      matrix: ${{ steps.release.outputs.matrix }}

  build:
    runs-on: ubuntu-latest
    needs: generate
    strategy:
      matrix: ${{ fromJson(needs.generate.outputs.matrix) }}
    steps:
      - run: echo "Build ${{ matrix.version }}"
```

## License
Licensed under the [MIT License](./LICENSE).
