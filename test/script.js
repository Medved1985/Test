const car = (name, model, owner, year, phone, image, city, price) => ({name, model, owner, year, phone, image, city, price})
const log = (text, type, date = new Date()) => ({text, type, date})
const cars = [
    car('Ford', 'Explorer', 'Макс', 2016, '+7 927 859 11 11', 'test/ford.jpg', 'Санкт-Петербург', '1500000 руб.'),
    car('Porche', '911', 'Алекс', 2015, '+7 927 859 11 22', 'test/pors9228.jpg', 'Москва', '2500000 руб.'),
    car('Buggati', 'Veyron', 'Соня', 2018, '+7 927 859 11 33', 'test/bug.jpg', 'Москва', '15000000 руб.'),
    car('Nissan', 'gtr', 'Олег', 2018, '+7 927 859 11 39', 'test/gt35.jpg', 'Москва', '4000000 руб.'),
    car('Lada', 'Granta', 'Иван', 2014, '+7 927 859 11 44', 'test/granta.jpg', 'Вологда', '450000 руб.')
]


new Vue ({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function(car,index) {
            this.car = car
            this.selectCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
            log(`Вы купили: ${this.car.name} - ${this.car.model}`, 'ok'))
        },
        cancelOrder() {
           this.modalVisibility = false 
            this.logs.push(
            log(`Отказ от покупки: ${this.car.name} - ${this.car.model}`, 'cnl'))
        }
    },
    computed: {
        phonetext() {
            return this.phoneVisibility ? 'Спрятать телефон' : 'Показать телефон'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.toLowerCase().indexOf(this.search) > -1 || car.model.toLowerCase().indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
          return value.toLocaleString()  
        }
    }
})
