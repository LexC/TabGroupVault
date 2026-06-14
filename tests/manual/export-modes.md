# Export Modes

## HTML Online Assets

- [ ] Select HTML page, online assets.
- [ ] Export selected grouped tabs to a custom folder.
- [ ] Confirm each selected tab writes only `N.html`.
- [ ] Confirm deselected tabs do not write files.
- [ ] Enable Export report CSV and confirm `tab-groups.csv` is written at the export root.

## HTML Relevant Assets

- [ ] Select HTML page + relevant assets.
- [ ] Export pages with scripts, stylesheets, images, and icons.
- [ ] Confirm selected tabs write `N.html` plus matching `N_files/`.
- [ ] Confirm stylesheet-internal `url(...)` and `@import` references may remain online URLs.
- [ ] Enable Export report CSV and confirm `tab-groups.csv` contains only selected page rows.

## HTML All Assets

- [ ] Select HTML page + all assets.
- [ ] Export the same complex page used for relevant assets.
- [ ] Confirm the `_files/` folder may contain additional recursively fetched stylesheet assets.

## MHTML

- [ ] Select MHTML page archives.
- [ ] Export a simple public webpage.
- [ ] Open the `.mhtml` file in Edge.
- [ ] Retry with a complex page and confirm capture failures increment Failed while later tabs continue.
- [ ] Enable Export report CSV and confirm selected MHTML pages are listed.

## CSV Index And Report

- [ ] Select CSV page index.
- [ ] Confirm Export grouped tabs is disabled while Export report CSV is unchecked.
- [ ] Enable Export report CSV.
- [ ] Deselect at least one eligible tab.
- [ ] Export `tab-groups.csv`.
- [ ] Confirm `tab-groups.csv` includes selected pages only.
- [ ] Confirm `tab-groups.csv` does not include `selected_for_export`, `skip_reason`, or `group_folder`.

## Filename Modes

- [ ] Keep Numbered filenames selected and confirm files use compact numbers.
- [ ] Select Page title filenames.
- [ ] Export pages with duplicate, long, and invalid-character titles.
- [ ] Confirm title filenames are sanitized, trimmed, and uniquified.
- [ ] Confirm HTML asset folders use the same title base with `_files`.

## Notes

```text

```
