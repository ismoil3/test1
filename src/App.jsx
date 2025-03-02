import React from "react";
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <button
        className="ml-[30px] bg-[red] text-[white] p-[20px]"
        onClick={() => TranslateClick("tj")}
      >
        tj
      </button>
      <button
        className="ml-[30px] bg-[red] text-[white] p-[20px]"
        onClick={() => TranslateClick("en")}
      >
        en
      </button>
      <button
        className="ml-[30px] bg-[red] text-[white] p-[20px]"
        onClick={() => TranslateClick("ru")}
      >
        ru
      </button>
      <p>{t("about.section1.title")}</p>
    </div>
  );
};

export default App;
