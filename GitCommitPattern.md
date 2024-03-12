This file describe the git commit pattern.

# Main commands

| command                    | description                               |
| -------------------------- | ----------------------------------------- |
| `git pull`                 | update the repository                     |
| `git add [. or file name]` | add a file or all file in a commit.       |
| `git commit -m ""`         | describe the added files                  |
| `git push `                | send the added files to remote repository |

# Git commit pattern

| tag      | description                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| test     | indicates any type of creation or modification of test codes                                                  |
| feat     | indicates the development of a new feature for the project                                                    |
| refactor | used when there is a code refactoring that does not have any impact on the logic/business rules of the system |
| style    | employed when there are formatting and style changes to the code that do not alter the system in any way      |
| fix      | used when correcting errors that are causing bugs in the system                                               |
| chore    | indicates changes to the project that do not affect the system or test files. These are development changes   |
| docs     | used when there are changes to the project documentation                                                      |
| build    | used to indicate changes that affect the project's build process or external dependencies                     |
| perf     | indicates a change that improved the system's performance                                                     |
| ci       | used for changes to CI configuration files                                                                    |
| revert   | indicates the revision of a previous commit                                                                   |

example `git commit -m "feat: new login checking add"`

# When do a commit

- The component has been finilized;
- A component has been integrated into a page;
- The page has been finalized;
- A structure has been refactored into a component.
