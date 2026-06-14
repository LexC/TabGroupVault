# Output, Destinations, And Conflicts

## Selected Folder

- [ ] Choose a writable folder outside Downloads.
- [ ] Keep Create TabPack folder enabled and export.
- [ ] Confirm output appears under `Selected folder/TabPack/`.
- [ ] Enable Export report CSV and confirm `tab-groups.csv` appears at the export root.
- [ ] Disable Create TabPack folder and export again.
- [ ] Confirm group folders are written directly inside the selected folder.
- [ ] Confirm `tab-groups.csv` moves with the selected export root.

## Remembered Folder

- [ ] Choose a folder, close TabPack, reopen TabPack.
- [ ] Confirm the folder is restored if Edge still grants write permission.
- [ ] If permission is not granted, confirm the UI asks you to choose the folder again.

## Conflict Behavior

- [ ] Export once with Uniquify existing files.
- [ ] Export again with Uniquify existing files.
- [ ] Confirm existing files remain and new files use suffixes such as `1 (1).html`.
- [ ] Export again with Overwrite existing files.
- [ ] Confirm matching files and `_files/` folders are replaced.

## Downloads Fallback

- [ ] Simulate or use a browser context where `showDirectoryPicker` is unavailable or denied.
- [ ] Confirm the Downloads fallback is clearly shown and must be explicitly checked.
- [ ] Export and confirm files are written under `Downloads/TabPack/`.
- [ ] Enable Export report CSV and confirm the fallback also queues `Downloads/TabPack/tab-groups.csv`.

## Notes

```text

```
