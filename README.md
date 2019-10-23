# setup-gnu-prolog

This actions sets up a GNU Prolog environment for use in workflows.

![](https://github.com/logtalk-actions/setup-gnu-prolog/workflows/Test/badge.svg)

# Usage

See [action.yml](action.yml).

# Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install GNU Prolog backend
        uses: logtalk-actions/setup-gnu-prolog@master
        with:
          gprolog-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
```

# License

This project is released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action does not support Windows at this time.
