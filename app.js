
async function fetchUsers(url = 'https://reqres.in/api/users?page=2') {
  try {
    const response = await axios.get(url);
    const finalData = response.data;

    if (finalData.page === 2) {
      return finalData;
    } else {
      throw new Error('Invalid response');
    }
  } catch (err) {
    throw err;
  }
}

(async () => {
  try {
    const value = await fetchUsers();
    console.log(value);

    const ul = document.querySelector('ul');
    value.data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.first_name;
      ul.appendChild(li);
    });
  } catch (err) {
    errorMsg(err);
  }
})();

async function secondTask(url = 'https://fakerapi.it/api/v1/companies?_quantity=3') {
    try {
        const response = await axios.get(url);
        const final = response.data;

        if (final.code === 200) {
            return final;
        } else {
            throw new Error('Invalid response')
        }
    } catch (err) {
        throw err
;    }
}

(async () => {
    try {
      const value = await secondTask();
      console.log(value);
  
      const ul = document.querySelector('ul');
      value.data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.phone;
        ul.appendChild(li);
      });
    } catch (err) {
      errorMsg(err);
    }
  })();


