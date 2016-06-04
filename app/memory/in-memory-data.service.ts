export class InMemoryDataService {
  createDb() {
    let address = [
	{ "id": 1, "name": "Jan", "surname": "Kowalski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 2, "name": "Piotr", "surname": "Kacprowicz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 3, "name": "Andrzej", "surname": "Nowak", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 4, "name": "Karol", "surname": "Markowski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 5, "name": "Joanna", "surname": "Tracz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 6, "name": "Stefan", "surname": "Tusk", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 7, "name": "Jan", "surname": "Kowalski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 8, "name": "Piotr", "surname": "Kacprowicz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 9, "name": "Andrzej", "surname": "Nowak", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl" , "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 10, "name": "Karol", "surname": "Markowski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl" , "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 11, "name": "Joanna Maria", "surname": "Tracz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 12, "name": "Stefan Bronisław", "surname": "Tusk", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 13, "name": "Jan Tadeusz", "surname": "Kowalski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 14, "name": "Piotr Tomek", "surname": "Kacprowicz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 15, "name": "Andrzej Wiesław", "surname": "Nowak", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 16, "name": "Karol Józef", "surname": "Markowski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl" , "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 17, "name": "Joanna Anna", "surname": "Tracz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 18, "name": "Stefan Jerzy", "surname": "Tusk", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 19, "name": "Piotr Tomek", "surname": "Kacprowicz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl" , "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 20, "name": "Andrzej Wiesław", "surname": "Nowak", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 21, "name": "Karol Józef", "surname": "Markowski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 22, "name": "Joanna Anna", "surname": "Tracz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 23, "name": "Karol Józef", "surname": "Markowski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl" , "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 24, "name": "Joanna Anna", "surname": "Tracz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 25, "name": "Stefan Jerzy", "surname": "Tusk", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 26, "name": "Piotr Tomek", "surname": "Kacprowicz", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },
	{ "id": 27, "name": "Andrzej Wiesław", "surname": "Nowak", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl" , "note":"Brzydka grafika oraz zła optymalizcja" },
	{ "id": 28, "name": "Karol Józef", "surname": "Markowski", "street": "Grunwaldzka", "number": "12", "city": "Gdańsk", "phone":"700-600-500", "email":"asd@wp.pl", "note":"Brzydka grafika oraz zła optymalizcja"  },

	];
	return {address};
  }
}