import { Select, Box } from "native-base";
export default function SelectBox(props) {
  const {
    country,
    set_country,
    select_item,
    placeholder,
    accessibilityLabel,
    minWidth,
  } = props;
  return (
    <Select
      selectedValue={country}
      minWidth={minWidth}
      accessibilityLabel={accessibilityLabel}
      placeholder={placeholder}
      // placeholder="Choose Service"

      mt={1}
      variant="underlined"
      onValueChange={(itemValue) => set_country(itemValue)}
      dropdownIcon={false}
      borderColor={"#00A884"}
      height={30}
      textAlign={"center"}
      icon={null} // Hide the dropdown icon
    >
      {select_item.map((master) => (
        <Select.Item label={master} value={master} />
      ))}
    </Select>
  );
}
