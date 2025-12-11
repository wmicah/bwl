import { type SchemaTypeDefinition } from "sanity"
import { postType } from "./postType"
import { specialType } from "./specialType"

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [postType, specialType],
}

export const schemaTypes = [postType, specialType]
