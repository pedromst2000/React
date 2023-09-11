export const convertBase64 = (cover) => {

  return new Promise((resolve, reject) => {

    const input = document.createElement('input');

    input.setAttribute('type', 'file');

    input.setAttribute('accept', 'image/*');

    input.click();

    input.onchange = () => {

      cover = input.files[0];

      const reader = new FileReader();

      reader.readAsDataURL(cover);

      reader.onload = () => resolve(reader.result);

      reader.onerror = error => reject(error);

    };

  })
}