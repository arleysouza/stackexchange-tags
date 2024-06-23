import styled from "styled-components";

export default function Input({ id, label, value, placeholder, setValue, handle }: Props) {

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      try{
        await handle();
      }
      catch(e){
        console.log("Erro:", e);
      }
    }
    return true; // Indica que a resposta será enviada de forma assíncrona
  };

  return (
    <Wrapper>
      <LabelSld htmlFor={id}>{label}</LabelSld>
      <InputSld
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={id}
        onKeyDown={handleKeyDown}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
`;

const LabelSld = styled.label`
  display: flex;
  color: #fff;
  padding: 0px;
  margin: 5px 0px;
`;

const InputSld = styled.input`
  display: flex;
  border-radius: 5px;
  border: none;
  padding: 8px;
  color: rgb(27, 71, 153);
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
  width: 150px;
`;

interface Props {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  handle: () => Promise<void>;
}
