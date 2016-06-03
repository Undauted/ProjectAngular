export class InMemoryDataService {
  createDb() {
    let address = [
	{ "id": 1, "name": "Jan", "surname": "Kowalski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":700600500 },
	{ "id": 2, "name": "Piotr", "surname": "Kacprowicz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":700600500  },
	{ "id": 3, "name": "Andrzej", "surname": "Nowak", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":700600500  },
	{ "id": 4, "name": "Karol", "surname": "Markowski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":700600500  },
	{ "id": 5, "name": "Joanna", "surname": "Tracz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":700600500  },
	{ "id": 6, "name": "Stefan", "surname": "Tusk", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":700600500  }
	];
	return {address};
  }
}