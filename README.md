# seminar-notification-generator

![title](./doc/img/title.webp 'title')

## Environment

- Node.js v20.17.0
- yarn 1.22.22

To run, excute below.

```bash
$ yarn
$ yarn dev
```

## Usage

1. Add grade. Enter grade name after pushing &lt;+&gt; button and &lt;edit&gt; button.
2. Add students name after select grade in the view of left.
3. Select starting time.
4. Enter template. There are two template variables, `TIME` and `PEOPLE`. These template variables are replaced by entered content.

### Example

Template.

```
*Seminar*
* attendee
PEOPLE

* starting
TIME
```

Generated.

```
*Seminar*
* attendee
* Bob: url1
* Alice: url2

Starting is  *11:00* .
```
