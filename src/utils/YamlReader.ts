import yaml from 'js-yaml';
import fs from 'fs';

// const DROPDOWNS_YAML_FILE_PATH = './playwright/fixtures/dropdowns.yaml';
const FIELDS_YAML_FILE_PATH = 'Fixtures/field.yaml';
//const PAGES_YAML_FILE_PATH = './playwright/fixtures/pages.yaml';
// export function loadDropdownsConfigFromYaml() {
//   return readFromYamlFilePath(DROPDOWNS_YAML_FILE_PATH);
// }

export function loadFieldsConfigFromYaml() {
  return readFromYamlFilePath(FIELDS_YAML_FILE_PATH);
}

// export function loadPagesConfigFromYaml() {
//   return readFromYamlFilePath(PAGES_YAML_FILE_PATH);
// }

export function readFromYamlFilePath(filepath: string) {
  return yaml.load(fs.readFileSync(filepath, 'utf8'));
}
