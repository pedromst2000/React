export const convertBase64 = (cover) => {

  let base64 = '';
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (e) => {
   const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      base64 = reader.result;
      cover = base64;
    };
  }

  input.click();

}