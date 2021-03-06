/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface CdReference {
  indice?: string;
  cat_1?: string;
  cat_2?: string;
  bib?: string;
  nbre_de_prets?: number;
  cote?: string;
  auteur?: string;
  editeur?: string;
  titre?: string;
  annee?: number;
}

interface CdRecords {
  datasetid?: string;
  recordid?: string;
  fields?: CdReference;
  record_timestamp?: string;
}

interface CdByYear {
  [annee: number]: Array<CdReference>;
}

interface CdByTitle {
  [titre: string]: Array<CdReference>;
}
