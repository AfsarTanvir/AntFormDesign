import CheckboxComponent from "./CheckboxComponent";
import EmailComponent from "./EmailComponent";
import NumberComponent from "./NumberComponent";
import PasswordComponent from "./PasswordComponent";
import RadioComponent from "./RadioComponent";
import SelectComponent from "./SelectComponent";
import TextareaComponent from "./TextareaComponent";
import TextComponent from "./TextComponent";
import type { FieldsType } from "../utils/types";

const componentMap: Record<string, React.FC<any> | undefined> = {
  radio: RadioComponent,
  email: EmailComponent,
  password: PasswordComponent,
  text: TextComponent,
  checkbox: CheckboxComponent,
  number: NumberComponent,
  select: SelectComponent,
  textarea: TextareaComponent,
};

function Fields({ field }: { field: FieldsType }) {
  const Component = componentMap[field.type];

  return (
    <>
      {Component ? (
        <Component field={field} />
      ) : (
        <h3>
          <b>Error</b> id: <b>{field.id}</b> type: <b>{field.type}</b>
        </h3>
      )}
    </>
  );
}

export default Fields;
