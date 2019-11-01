# `setup-gnu-prolog`

This actions sets up a GNU Prolog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-gnu-prolog/workflows/Test/badge.svg)

## Usage

See [action.yml](action.yml) for the action metadata. The required `gnu-prolog-version` input parameter specifies the version to be installed (`latest` or version number, e.g. `1.4.5`; default is `latest`).

## Example

```yml
on: push

jobs:
  test:
    runs-on: macOS-latest
    steps:
      - name: Install GNU Prolog backend
        uses: logtalk-actions/setup-gnu-prolog@master
        with:
          gnu-prolog-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p gnu
```

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action only supports macOS at this time (the Ubuntu package is broken).
