# setup-gnu-prolog

This actions sets up a GNU Prolog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-gnu-prolog/workflows/Test/badge.svg)
![](https://github.com/logtalk-actions/setup-gnu-prolog/workflows/Logtalk/badge.svg)

# Usage

See [action.yml](action.yml).

# Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: logtalk-actions/setup-gnu-prolog@master
        with:
          gprolog-version: latest
      - uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - uses: actions/checkout@v1
```

# License

The scripts and documentation in this project are released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action does not support Windows at this time.
