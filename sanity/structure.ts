// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      // Add your document types here
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['media.tag'].includes(listItem.getId()!)
      ),
    ])

