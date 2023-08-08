import { FC} from "react";
import { GrLanguage } from "react-icons/gr";
import { Select } from "antd";

type CountryProps = {
  onDataChange: (selectedCountry: string) => void;
};

const country: FC<CountryProps> = ({ onDataChange }) => {
  const onChange = (value: string) => {
    onDataChange(value);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  return (
    <div className="ml-5 mt-32 md:mt-16  flex flex-row items-center gap-2">
      <span className="text-2xl ">
        <GrLanguage/>
      </span>
      <div className="">
        <Select
          showSearch
          className="border border-black        "
          placeholder="Select a country"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "ae",
              label: "United Arab Emirates",
            },
            {
              value: "ar",
              label: "Argentina",
            },
            {
              value: "at",
              label: "Austria",
            },
            {
              value: "au",
              label: "Australia",
            },
            {
              value: "be",
              label: "Belgium",
            },
            {
              value: "bg",
              label: "Bulgaria",
            },
            {
              value: "br",
              label: "Brazil",
            },
            {
              value: "ca",
              label: "Canada",
            },
            {
              value: "ch",
              label: "Switzerland",
            },
            {
              value: "cn",
              label: "China",
            },
            {
              value: "co",
              label: "Colombia",
            },
            {
              value: "cu",
              label: "Cuba",
            },
            {
              value: "cz",
              label: "Czech Republic",
            },
            {
              value: "de",
              label: "Germany",
            },
            {
              value: "eg",
              label: "Egypt",
            },
            {
              value: "fr",
              label: "France",
            },
            {
              value: "gb",
              label: "United Kingdom",
            },
            {
              value: "gr",
              label: "Greece",
            },
            {
              value: "hk",
              label: "Hong Kong",
            },
            {
              value: "hu",
              label: "Hungary",
            },
            {
              value: "id",
              label: "Indonesia",
            },
            {
              value: "ie",
              label: "Ireland",
            },
            {
              value: "il",
              label: "Israel",
            },
            {
              value: "in",
              label: "India",
            },
            {
              value: "it",
              label: "Italy",
            },
            {
              value: "jp",
              label: "Japan",
            },
            {
              value: "kr",
              label: "South Korea",
            },
            {
              value: "lt",
              label: "Lithuania",
            },
            {
              value: "lv",
              label: "Latvia",
            },
            {
              value: "ma",
              label: "Morocco",
            },
            {
              value: "mx",
              label: "Mexico",
            },
            {
              value: "my",
              label: "Malaysia",
            },
            {
              value: "ng",
              label: "Nigeria",
            },
            {
              value: "nl",
              label: "Netherlands",
            },
            {
              value: "no",
              label: "Norway",
            },
            {
              value: "nz",
              label: "New Zealand",
            },
            {
              value: "ph",
              label: "Philippines",
            },
            {
              value: "pl",
              label: "Poland",
            },
            {
              value: "pt",
              label: "Portugal",
            },
            {
              value: "ro",
              label: "Romania",
            },
            {
              value: "rs",
              label: "Serbia",
            },
            {
              value: "ru",
              label: "Russia",
            },
            {
              value: "sa",
              label: "Saudi Arabia",
            },
            {
              value: "se",
              label: "Sweden",
            },
            {
              value: "sg",
              label: "Singapore",
            },
            {
              value: "si",
              label: "Slovenia",
            },
            {
              value: "sk",
              label: "Slovakia",
            },
            {
              value: "th",
              label: "Thailand",
            },
            {
              value: "tr",
              label: "Turkey",
            },
            {
              value: "tw",
              label: "Taiwan",
            },
            {
              value: "ua",
              label: "Ukraine",
            },
            {
              value: "us",
              label: "United States",
            },
            {
              value: "ve",
              label: "Venezuela",
            },
            {
              value: "za",
              label: "South Africa",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default country;
