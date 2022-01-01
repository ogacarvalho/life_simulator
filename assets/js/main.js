/* Simulador Humano
Sua primeira etapa consiste em criar características e dados de um ser humano.

Dados Principais:
- Idade
- pais
- Nível de Inteligência
- Valor em Conta Bancária
 */

const random = (min = 0, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

let pais = ['Estados Unidos', 'Brazil', 'Jamaica', 'Estônia', 'Londres', 'Africa', 'Chile', 'Irlanda', 'Argentina','França','Peru','Canadá','Russia','China','Japão', 'Venezuela','Emirados Árabes','Tailandia','Italia','Espanha','Portugal','Egito','Paraguay','Mexico','Romenia'];

const smart = () => {
    let smart = ['Analfabeto','Pouco inteligente', 'Abaixo da média', 'Normal','Acima da Média','Muito Inteligente', 'Gênio'];
    let resultado = smart[random(0,smart.length -1)]
    return `${resultado}: ${smart.indexOf(resultado)}`
};

const luck = () => {
    let regua = random(0, 100);
    if(regua <= 10){
        return 'azar'
    }
    if(regua >= 98){
        return 'sorte'
    }else{
        return 'neutro'
    }
};
let sorte = luck();


const nome = () => {
    nomes = ["Maria", "Matilde", "Leonor", "Carolina", "Beatriz", "Mariana", "Ana", "Sofia", "Inês", "Margarida", "Francisca", "Lara", "Laura", "Alice", "Joana", "Clara", "Diana", "Madalena", "Mara", "Luana", "Benedita", "Constança", "Mafalda", "Bianca", "Íris", "Sara", "Camila", "Gabriela", "Rita", "Eva", "Carlota", "Letícia", "Vitória", "Ema", "Luísa", "Catarina", "Ariana", "Yasmin", "Yara", "Carminho", "Miriam", "Marta", "Alícia", "Rafaela", "Luena", "Victória", "Núria", "Kyara", "Helena", "Valentina", "Júlia", "Bárbara", "Isabel", "Nicole", "Daniela", "Lia", "Bruna", "Melissa", "Noa", "Jéssica", "Teresa", "Iara", "Raquel", "Filipa", "Mia", "Érica", "Luna", "Isis", "Caetana", "Alexandra", "Mélanie", "Pilar", "Juliana", "Kelly", "Isabela", "Adriana", "Aurora", "Débora", "Soraia", "Eduarda", "Lorena", "Áurea", "Olívia", "Amélia", "Emília", "Naiara", "Frederica", "Irina", "Renata", "Anita", "Larissa", "Petra", "Emma", "Sarah", "Vera", "Tatiana", "Julieta", "Nádia", "Mayara", "Salomé", "Samira", "Rebeca", "Fabiana", "Patrícia", "Simone", "Paloma", "Aline", "Liliana", "Nair", "Luz", "Luciana", "Andreia", "Isabella", "Dalila", "Chloe", "Ester", "Flor", "Safira", "Erika", "Elisa", "Anna", "Rosa", "Mónica", "Cláudia", "Lúcia", "Abigail", "Ângela", "Rosarinho", "Sophia", "Carla", "Alana", "Micaela", "Bia", "Fátima", "Maiara", "Emily", "Eliana", "Carmo", "Dânia", "Marisa", "Erica", "Cíntia", "Amália", "Raissa", "Viviane", "Serena", "Vanessa", "Clarisse", "Denise", "Carina", "Violeta", "Eliane", "Rute", "Flávia", "Kiara", "Iris", "Liara", "Susana", "Cristina", "Cecília", "Giovana", "Nayara", "Márcia", "Oriana", "Milena", "Victoria", "Lídia", "Dara", "Manuela", "Cristiana", "Estrela", "Elena", "Lea", "Liana", "Angélica", "Solange", "Telma", "Dayane", "Sónia", "Antónia", "Verónica", "Marina", "Aléxia", "Ariane", "Isa", "India", "Paula", "Simara", "Liane", "Ellen", "Lívia", "Daria", "Neuza", "Lais", "Tânia", "Leila", "Sandra", "Priscila", "Martina", "Riana", "Melanie", "Tamara", "Samanta", "Valéria", "Jénifer", "Ariele", "Maísa", "Deise", "Maia", "Taís", "Carmen", "Briana", "Glória", "Amanda", "Ciara", "Doriana", "Esther", "Thaís", "Clarinha", "Jacinta", "Guiomar", "Esmeralda", "Brenda", "Aisha", "Anaísa", "Esperança", "Viviana", "Elsa", "Lua", "Natacha", "Olivia", "Oceana", "Luzia", "Ashley", "Tamára", "Concha", "Nina", "Noemi", "Cloe", "Maya", "Rafaella", "Rayanne", "Ísis", "Alicia", "Zoé", "Sabrina", "Estela", "Maira", "Lya", "Naísa", "Dora", "Cloé", "Charlotte", "Angelina", "Taísa", "Samara", "Penélope", "Lília", "Luisa", "Chloé", "Jennifer", "Suri", "Stella", "Maura", "Eunice", "Martinha", "Aysha", "Aura", "Maryam", "Karina", "Mayra", "Alma", "Josiane", "Eleonor", "Anaís", "Vânia", "Laís", "Graça", "Rayssa", "Mercedes", "Alissa", "Ária", "Lisandra", "Alexa", "Adelaide", "Miranda", "Naíma", "Yohanna", "Lígia", "Stephanie", "Adelina", "Irís", "Melina", "Lina", "Alexia", "Cátia", "Liz", "Jussara", "Mila", "Carol", "Dulce", "Fatumata", "Cândida", "Pérola", "Isaura", "Taíssa", "Jade", "Joyce", "Lavínia", "Suéli", "Irene", "Kayla", "Nídia", "Aurea", "Anabela", "Michele", "Emilly", "Mirian", "Hellen", "Tiffany", "Mercês", "Milana", "Nancy", "Naomi", "Rebecca", "Jacira", "Katie", "Nara", "Anastasia", "Leticia", "Leandra", "Giovanna", "Morgana", "Anamar", "Jessica", "Tiara", "Anaya", "Matilda", "Zoe", "Alessia", "Andrea", "Aminata", "Gabriella", "Flora", "Magda", "Ayla", "Adriela", "Rania", "Evelyn", "Luiza", "Elisabete", "Joelma", "Marlene", "Tiana", "Melany", "Keyla", "Fernanda", "Malika", "Dádiva", "Allana", "Nayra", "Natália", "Natalia", "Cinara", "Michelle", "Diva", "Hannah", "Marisol", "Lucília", "Stela", "Luara", "Janice", "Sol", "Kataleya", "Sheila", "Cataleya", "Cassandra", "Bella", "Florbela", "Celina", "Aida", "Milene", "Alina", "Melyssa", "Kaylane", "Branca", "Iriana", "Dafne", "Amora", "Liliane", "Janaína", "Suria", "Lana", "Ariel", "Sílvia", "Kimberly", "Siena", "Silvana", "Weza", "Evelina", "Haniela", "Veronica", "Guadalupe", "Rayane", "Alyssa", "Mariam", "Sophie", "Joice", "Camilla", "Alba", "Kieza", "Jasmina", "Veronika", "Khadija", "Hadassa", "Polina", "Yasmine", "Cármen", "Nadine", "Sienna", "Ariela", "Zara", "Elisabeth", "Seerat", "Maimuna", "Ânia", "Klara", "Ália", "Melinda", "Brianna", "Ava", "Nour", "Ândria", "Aicha", "Zita", "Tabita", "Nalini", "Rossana", "Isadora", "Sharon", "Laryssa", "Taynara", "Barbara", "Lucy", "Andreea", "Dina", "Maitê", "Lola", "Lena", "Teresinha", "Ellie", "Elvira", "Sahara", "Aylla", "Catalina", "Nicolly", "Marília", "Stephany", "Rúbia", "Noémi", "Filomena", "Eliza", "Agatha", "Denisa", "Daisi", "Fábia", "Olga", "Aaliyah", "Emilia", "Nayla", "Liany", "Sasha", "Nikol", "Muriel", "Pietra", "Latifa", "Aliça", "Lira", "Ticiana", "Leah", "Lucía", "Edna", "Stefany", "Nuna", "Daiana", "Quélia", "Leia", "Radija", "Emanuela", "Fatima", "Thayla", "Ivana", "Kira", "Anabel", "Amy", "Cássia", "Sarai", "Arina", "Geovana", "Pandora", "Francesca", "Letízia", "Alda", "Estefânia", "Amira", "Mirela", "Lunna", "Hoorain", "Dália", "Zaira", "Cora", "Kailany", "Zoey", "Suely", "Sehajpreet", "Ionara", "Jandira", "Indira", "Mathilde", "Hawa", "Linda", "Debora", "Aleksandra", "Dominique", "Anair", "Heloísa", "Gisela", "Jana", "Delia", "Rosário", "Mágui", "Stefania", "Inara", "Lidiana", "Cristal", "Cheila", "Jasmeen", "Letizia", "Laureana", "Anaelle", "Vilma", "Manha", "Andra", "Amelia", "Ayumi", "Melody", "Yasmina", "Assunção", "Genésia", "Nayma", "Nadia", "Nélia", "Antonia", "Crystal", "Yana", "Kamila", "Thayra", "Élia", "Ayesha", "Lurdes", "Emanuelle", "Aryana", "Anastácia", "Jael", "Aliana", "Zélia", "Eveline", "Otília", "Perla", "Chelsea", "Yi", "Kendra", "Hayla", "Viktoria", "Jil", "Fedra", "Ivy", "Samaritana", "Marwa", "Miguela", "Aliyha", "Josefa", "Poliana", "Karen", "Laysla", "Ranya", "Lilian", "Josefina", "Maribel", "Piedade", "Amina", "Lyah", "Djelissa", "Suzi", "Viktoriya", "Jasmeet", "Adélia", "Isís", "Rahyssa", "Stéphanie", "Orquídea", "Shaira", "Adama", "Graciana", "Ludmila", "Yangchen", "Emilie", "Rose", "Céline", "Dayra", "Anaisa", "Alisa", "Aya", "íris", "Anastacia", "Lavinia", "Jacyara", "Alisha", "Hossana", "Ananda", "Soraya", "Malak", "Arianna", "Karolina", "Marie", "Florinda", "Samantha", "Karine", "Kaya", "Ayani", "Bela", "Ohana", "Angela", "Jia", "Mikaela", "Isabelly", "Rahela", "Dilnura", "Elzira", "Mariama", "Elizabeth", "Anais", "Oumou", "Louisa", "Estefany", "Layra", "Thaíssa", "Cidália", "Selma", "Olinda", "Katia", "Grace", "Mankirat", "Girisha", "Lueji", "Heloisa", "Zlata", "Roberta", "Louise", "Ticiane", "Prapti", "Melânia", "Lyara", "Séfora", "Tamar", "Mellyssa", "Katerina", "Dominika", "Izabel", "Suzana", "Yaqi", "Elizabet", "Ágata", "Valentine", "Amélie", "Vivian", "Neusa", "Gaia", "Deva", "Raina", "Dária", "Lícia", "Stacy", "Elisete", "Elisama", "Hareem", "Eshal", "Inaaya", "Andressa", "KellY", "Hélia", "Giulia", "Yiyi", "Quessia", "Lyana", "Yassna", "Iasmin", "Zilda", "Myriam", "Adriele", "Cleide", "Sujana", "Andreína", "Gabrielly", "Mel", "Janira", "Geovanna", "Adele", "Celeste", "Nayr", "Aliya", "Raíssa", "Alycia", "Berenice", "Cadija", "Hafsa", "Virgínia", "Bebiana", "Anny", "Luenna", "Nelsa", "Izabella", "Julia", "Neide", "Evelin", "Simona", "Jessie", "Surya", "Gina", "Ayra", "Rosalina", "Jane", "Lisa", "Tainara", "Jasmine", "Miria", "Mellanie", "Ndeye", "Santiago", "João", "Francisco", "Rodrigo", "Martim", "Afonso", "Tomás", "Miguel", "Duarte", "Gabriel", "Lourenço", "Gonçalo", "Pedro", "Guilherme", "Tiago", "Dinis", "Rafael", "Diogo", "Lucas", "Salvador", "Gustavo", "David", "Vicente", "Simão", "José", "Mateus", "Diego", "Manuel", "Henrique", "António", "Daniel", "Vasco", "Leonardo", "Bernardo", "André", "Luís", "Enzo", "Eduardo", "Alexandre", "Isaac", "Kevin", "Rúben", "Filipe", "Matias", "Leandro", "Xavier", "Ricardo", "Samuel", "Artur", "Nuno", "Bruno", "Carlos", "Davi", "Sebastião", "Hugo", "Valentim", "Rui", "Frederico", "Renato", "Bryan", "Jorge", "Lorenzo", "Benjamim", "Joaquim", "Paulo", "Marco", "Noah", "Mário", "Fábio", "Jaime", "Manel", "Tomé", "William", "Cristiano", "Ângelo", "Micael", "Gil", "Ivo", "Edgar", "Raúl", "Fernando", "Brian", "Ivan", "César", "Emanuel", "Gaspar", "Luca", "Vítor", "Romeu", "Sandro", "Dilan", "Sérgio", "Alex", "Igor", "Eric", "Marcelo", "Elias", "Denis", "Caio", "Isac", "Ismael", "Liam", "Lisandro", "Jonathan", "Moisés", "Yuri", "Muhammad", "Josué", "Cláudio", "Mauro", "Adrien", "Danilo", "Joel", "Erik", "Álvaro", "Nelson", "Dário", "Márcio", "Martinho", "Wesley", "Matheus", "Levi", "Telmo", "Marcos", "Júlio", "Wilson", "Martin", "Victor", "Leonel", "Arthur", "Leo", "Oliver", "Abel", "Thiago", "Cristian", "Benjamin", "Dylan", "Misael", "Edson", "Ian", "Fausto", "Christian", "Ezequiel", "Jonas", "Andrei", "Raul", "Gerson", "Giovani", "Caetano", "Matteo", "Luan", "Ryan", "Adam", "Hélder", "Nicolau", "Sebastian", "Cauã", "Patrick", "Estêvão", "Flávio", "Adriano", "James", "Óscar", "Nicolas", "Alexandru", "Kelvin", "Joshua", "Roberto", "Kendrick", "Augusto", "Cristóvão", "Alberto", "Jesus", "Natanael", "Domingos", "Vitor", "Adriel", "Erick", "Mark", "Jason", "Davide", "Ruben", "Félix", "Marcus", "Luciano", "Denzel", "Heitor", "Jonatã", "Gael", "Iúri", "Aléxis", "Kévim", "Mikael", "Aron", "Luis", "Israel", "Lucca", "Ulisses", "Alonso", "Thomas", "Célio", "Helder", "Dennis", "Mohammad", "Rúdi", "Rayan", "Damien", "Edmundo", "Mohamed", "Adrian", "Ary", "Noé", "Agostinho", "Nataniel", "Valentino", "Maurício", "Fabrício", "Denilson", "Felipe", "Theo", "Éder", "Orlando", "Pietro", "Joabe", "Ravi", "Isaque", "Rogério", "Américo", "Enrique", "Raphael", "Aaron", "Alexandro", "Juliano", "Breno", "Jónatas", "Jair", "Ianis", "Isael", "Robert", "Salomão", "Ícaro", "Tobias", "Amadeu", "Júnior", "Kenzo", "Nathan", "Kauã", "Ibrahim", "Alexander", "Omar", "Anselmo", "Fred", "Élson", "Zion", "Théo", "Jayden", "Eduard", "Válter", "Henry", "Mickael", "Diniz", "Mateo", "Samir", "Lúcio", "Kennedy", "Tierri", "Messias", "Hélio", "Abdul", "Humberto", "Antonio", "Celso", "Marlon", "Jerónimo", "Kauan", "Timóteo", "Haniel", "Iago", "Stefan", "Eliel", "Armando", "Giovanni", "Dominic", "Derick", "Jayson", "Liedson", "Daniil", "Adonai", "Hernâni", "Absalão", "Jessé", "Ethan", "Hazael", "Yu", "Damian", "Maksym", "Mamadou", "Angelo", "Amir", "Giani", "Yannick", "Evan", "Azael", "Zaqueu", "Kelton", "Maksim", "Milan", "Maxim", "Ruan", "Jaden", "Anderson", "Yanni", "Matviy", "Chris", "Marcelino", "Apolo", "Silvestre", "Aires", "Brayan", "Jairo", "Ayaan", "Timur", "Alessandro", "Alfredo", "Martín", "Keven", "Kiamy", "Lázaro", "Max", "Alan", "Bento", "Saúl", "Isaías", "Lukas", "Kian", "Djeyson", "Darius", "Mohammed", "Matei", "Eliézer", "Aryan", "Pablo", "Youssef", "Anthony", "Luiz", "Armaan", "Kleyton", "Evandro", "Angélico", "Artyom", "Josias", "Nilson", "Marvin", "Máximo", "Marley", "Kévin", "Délcio", "Benício", "Yohan", "Deivid", "Uriel", "Raphaël", "Vladimir", "Lopo", "Nicollas", "Oziel", "Steven", "Nikita", "Aleksandr", "Inácio", "Vladislav", "Prince", "Abdullah", "George", "Dante", "Derek", "Axel", "Eurico", "Zayn", "Johnny", "Elijah", "Baltasar", "Gastão", "Felix", "Nicholas", "Ioan", "Fabiano", "Rubim", "Delmar", "Michael", "Sancho", "Arsénio", "Francesco", "Armindo", "Jack", "Valentin", "Rubi", "Christopher", "Eder", "Abdoulaye", "Maximus", "Neymar", "Jan", "Richard", "Reinaldo", "Ion", "Delfim", "Nazar", "Jacinto", "Juan", "Ezio", "Emídio", "Virgílio", "Kelson", "Davy", "Bogdan", "Sílvio", "Alexandr", "Diamantino", "Louis", "Emmanuel", "Iulian", "Oscar", "Tito", "Nilton", "Nélson", "Gusttavo", "Estevão", "Aarnav", "Jeferson", "Joseph", "Agrim", "Lamarana", "Helton", "Édi", "Wallace", "Danilson", "Keyson", "Belchior", "Dérick", "Walter", "Albert", "Fernão", "Shayan", "Mario", "Kael", "Mustafa", "Georgi", "Anael", "Francis", "Esteban", "Enoque", "Hermano", "Kiari", "Mílton", "Ibrahima", "Calebe", "Simon", "Ezra", "Yannis", "Mauri", "Emílio", "Tom", "Willian", "Hamilton", "Kayden", "Tyron", "Abraão", "Elielson", "Laércio", "Hao", "Guransh", "Eli", "Atanas", "Eddy", "Ming", "Ivanilson", "Jefferson", "Fabian", "Marcel", "Vasile", "Kimi", "Bartolomeu", "Jia", "Cédric", "Arnaldo", "Valter", "Eliseu", "Kyami", "Edir", "Jóni", "Léon", "Mariano", "Kyle", "Cael", "Kirill", "Nikolai", "Henzo", "Rodney", "Michel", "Lev", "Lui", "Yi", "Rodolfo", "Ben", "Nathaniel", "Camilo", "Giovany", "Kushal", "Samoa", "Alcino", "Jun", "Filip", "Túlio", "Kaio", "Élton", "Elói", "Abrão", "Atílio", "Asael", "Nélio", "Arman", "Cristovão", "Jadir", "Viriato", "Oleksandr", "Eden", "Ionut", "Abílio", "Ahmad", "Ayrton", "Jimmy", "Gelson", "Eusébio", "Éric", "Teófilo", "Ilídio", "Luka", "Antoine", "Harry", "Luke", "Finn", "Hilário", "Jordan", "Antônio", "Aayush", "Maximiano", "Brahim", "Zhen", "Andriy", "Gilberto", "Tyler", "Avelino", "Kevyn", "Arian", "Lian", "Antero", "Nicolae", "Milton", "Pavel", "Jonata", "Adrián", "Romão", "Janilson", "Dario", "Damião", "Stephen", "Raj", "Zé", "Alvin", "Mathias", "Osvaldo", "Gianluca", "Edwin", "Jamie", "Russell", "Ravidson", "Destiny", "Érico", "Kyan", "Mizael", "Gilson", "Ari", "Dinarte", "Patrício", "Giorgi", "Yaroslav", "Teotónio", "Adalberto", "Santhiago", "Amaro", "Laurindo", "Zihao", "Nikolas", "Kylian", "Catalin", "Djayson", "Mouhamed", "Claúdio", "Bilal", "Kristian", "Oséias", "Aarav", "Jeremias", "Ishan", "Valdemar", "Imran", "Nilo", "Kenny", "Riyan", "Aman", "Januário", "Rian", "Nicola", "Matthias"]

    return `${nomes[random(0, nomes.length -1)]} ${nomes[random(0, nomes.length -1)]} `;
}

const social = () => {
    let social = ['Miserável', 'Mendigo', 'Muito Pobre', 'Pobre', 'Classe Média', 'Classe Média-Alta', 'Rico', 'Muito Rico', 'Extramente Rico']
    if(sorte == 'azar'){
        return social[random(0,2)];
    }
    if(sorte == 'neutro'){
        return social[random(3,5)]
    }else{
        return social[random(6,8)]
    }
};

const conta = () => {
    if(sorte == 'azar'){
        return `R$ ${random(0,10) * random(1,3)}`
    }
    if(sorte == 'neutro'){
        return `R$ ${random(0, 10) * random(1,3000)}`
    }else{
        return `R$ ${random(1000,100000) * random(1,100)}`
    }
};

const vida = (sorte) => {
    return {
        nome: nome(),
        sorte: sorte,
        idade: random(17,75),
        social: social(),
        banco: conta(),
    }
};

let pessoa = vida(sorte)
let inicio = document.querySelector('h1');
inicio.innerHTML = `Pessoa: ${pessoa.nome}<br><br>
Sorte: ${pessoa.sorte}<br><br>
Idade: ${pessoa.idade}<br><br>
Condição Socia: ${pessoa.social}<br><br>
Valor no banco: ${pessoa.banco}`;


