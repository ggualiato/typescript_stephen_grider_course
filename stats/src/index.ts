// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { MatchReader } from "./MatchReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { Summary } from "./Summary";

// const matchReader = MatchReader.fromCsv("football.csv");
// matchReader.load();

// const summary = new Summary(new WinsAnalysis("Everton"), new ConsoleReport());

// summary.buildAndPrintReport(matchReader.matches);

// const htmlSummary = Summary.winsAnalysisWithHtmlReport("Everton");

// htmlSummary.buildAndPrintReport(matchReader.matches);

// type SomeProperties extends string

type LocalizedString<T extends string> = Record<T, string>;

function getInitialCharacteristics<T extends string>(
  names: T[]
): LocalizedString<T>;

function getInitialCharacteristics(names: string[]): LocalizedString<string> {
  return names.reduce((obj, name) => ({ ...obj, [name]: "" }), {});
}

type GetLocalizedString = (name: string[]) => Record<string, string>;

const getCharacteristics: GetLocalizedString = (
  names: string[]
): LocalizedString<string> => {
  return names.reduce((obj, name) => ({ ...obj, [name]: "" }), {});
};

const x = getCharacteristics(["hello", "mundo"]);

const result = getInitialCharacteristics(["hello", "world"]);
result.hello; //ok
result.world; //ok
result.hello; //err
