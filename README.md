# BooksScraper 📚

API desarrollada en **NestJS** que realiza web scraping sobre [Books to Scrape](https://books.toscrape.com/) utilizando **Puppeteer**.

<!-- TOC -->

- [BooksScraper 📚](#booksscraper-)
  - [📋 Sanbox](#-sanbox)
  - [📋 Prerrequisitos](#-prerrequisitos)
  - [⚙️ Instalación](#-instalación)
  - [🚀 Ejecución](#-ejecución)
  - [🔌 Uso](#-uso)
    - [Parámetros](#parámetros)
    - [Respuesta](#respuesta)

<!-- /TOC -->

\--

## 📋 Prerrequisitos

Asegúrate de tener instalado en tu entorno:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) *(Opcional, para ejecución en contenedores)*

---

## ⚙️ Instalación

Clona el repositorio e instala las dependencias del proyecto:

```bash
git clone https://github.com/rifarca/BooksScraper.git
cd BooksScraper
npm install
```

---

## 🚀 Ejecución

Selecciona el método que prefieras para levantar la aplicación:

🟢 Ejecutar con npm (Recomendado)
<br />

```bash
# Modo desarrollo (con recarga automática)
npm run start:dev

# Modo producción
npm run build
npm run start:prod
```

🔴 Ejecutar con Nest CLI
<br />

*Nota: Requiere tener instalado&#x20;*`@nestjs/cli`*&#x20;de forma global (*`npm i -g @nestjs/cli`*).*

```bash
# Modo desarrollo
nest start --watch

# Modo producción
nest build
nest start --prod
```

🐳 Ejecutar con Docker
<br />

```bash
# Construir el ontenedor
docker compose up --build

```

---

---

## 📋 Sanbox

Asegúrate de tener instalado en tu entorno:

- \[Swagger] {http://localhost:3000/sanbox}

---

## 🔌 Uso

Una vez iniciado el servidor, realiza una petición `GET` al siguiente endpoint:

```bash
curl -X 'GET' \
  'http://192.168.0.2:3553/books/scrape?pages=3' \
  -H 'accept: */*' \
  -H 'x-api-token: mi-token-secreto-123'

```

### Parámetros

| Parámetro | Tipo     | Descripción                                 | Requerido             |
| :-------- | :------- | :------------------------------------------ | :-------------------- |
| `pages`   | `number` | Cantidad de páginas del catálogo a extraer. | No (por defecto: `1`) |

### Respuesta

- **API:** Devuelve el listado de libros extraídos en formato `JSON`.
- **Archivo local:** Guarda automáticamente una copia del resultado en `books.json` en la raíz del proyecto.

```json

  {
    "title": "A Light in the Attic",
    "image": "https://books.toscrape.com/media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg",
    "price": "£51.77",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html",
    "desc": "Its hard to imagine a world without A Light in the Attic This nowclassic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition Silversteins humorous and creative verse can amuse the dowdiest of readers Lemonfaced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love th Its hard to imagine a world without A Light in the Attic This nowclassic collection of poetry and drawings from Shel Silverstein celebrates its 20th anniversary with this special edition Silversteins humorous and creative verse can amuse the dowdiest of readers Lemonfaced adults and fidgety kids sit still and read these rhythmic words and laugh and smile and love that Silverstein Need proof of his genius RockabyeRockabye baby in the treetopDont you know a treetopIs no safe place to rockAnd who put you up thereAnd your cradle tooBaby I think someone down heresGot it in for you Shel you never sounded so good more",
    "upc": "a897fe39b1053632"
  },
  {
    "title": "Tipping the Velvet",
    "image": "https://books.toscrape.com/media/cache/26/0c/260c6ae16bce31c8f8c95daddd9f4a1c.jpg",
    "price": "£53.74",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/tipping-the-velvet_999/index.html",
    "desc": "Erotic and absorbingWritten with starling powerThe New York Times Book Review Nan King an oyster girl is captivated by the music hall phenomenon Kitty Butler a male impersonator extraordinaire treading the boards in Canterbury Through a friend at the box office Nan manages to visit all her shows and finally meet her heroine Soon after she becomes Kittys Erotic and absorbingWritten with starling powerThe New York Times Book Review Nan King an oyster girl is captivated by the music hall phenomenon Kitty Butler a male impersonator extraordinaire treading the boards in Canterbury Through a friend at the box office Nan manages to visit all her shows and finally meet her heroine Soon after she becomes Kittys dresser and the two head for the bright lights of Leicester Square where they begin a glittering career as musichall stars in an allsinging and dancing double act At the same time behind closed doors they admit their attraction to each other and their affair begins more",
    "upc": "90fa61229261140a"
  },
  {
    "title": "Soumission",
    "image": "https://books.toscrape.com/media/cache/3e/ef/3eef99c9d9adef34639f510662022830.jpg",
    "price": "£50.10",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/soumission_998/index.html",
    "desc": "Dans une France assez proche de la notre un homme sengage dans la carriere universitaire Peu motive par lenseignement il sattend a une vie ennuyeuse mais calme protegee des grands drames historiques Cependant les forces en jeu dans le pays ont fissure le systeme politique jusqua provoquer son effondrement Cette implosion sans soubresauts sans vraie revolution s Dans une France assez proche de la notre un homme sengage dans la carriere universitaire Peu motive par lenseignement il sattend a une vie ennuyeuse mais calme protegee des grands drames historiques Cependant les forces en jeu dans le pays ont fissure le systeme politique jusqua provoquer son effondrement Cette implosion sans soubresauts sans vraie revolution se developpe comme un mauvais reveLe talent de lauteur sa force visionnaire nous entrainent sur un terrain ambigu et glissant son regard sur notre civilisation vieillissante fait coexister dans ce roman les intuitions poetiques les effets comiques une melancolie fatalisteCe livre est une saisissante fable politique et morale more",
    "upc": "6957f44c3847a760"
  },
  {
    "title": "Sharp Objects",
    "image": "https://books.toscrape.com/media/cache/32/51/3251cf3a3412f53f339e42cac2134093.jpg",
    "price": "£47.82",
    "availability": "In stock",
    "rating": "Four",
    "detailUrl": "https://books.toscrape.com/catalogue/sharp-objects_997/index.html",
    "desc": "WICKED above her hipbone GIRL across her heart Words are like a road map to reporter Camille Preakers troubled past Fresh from a brief stay at a psych hospital Camilles first assignment from the secondrate daily paper where she works brings her reluctantly back to her hometown to cover the murders of two preteen girls NASTY on her kneecap BABYDOLL on her leg Since WICKED above her hipbone GIRL across her heart Words are like a road map to reporter Camille Preakers troubled past Fresh from a brief stay at a psych hospital Camilles first assignment from the secondrate daily paper where she works brings her reluctantly back to her hometown to cover the murders of two preteen girls NASTY on her kneecap BABYDOLL on her leg Since she left town eight years ago Camille has hardly spoken to her neurotic hypochondriac mother or to the halfsister she barely knows a beautiful thirteenyearold with an eerie grip on the town Now installed again in her familys Victorian mansion Camille is haunted by the childhood tragedy she has spent her whole life trying to cut from her memory HARMFUL on her wrist WHORE on her ankle As Camille works to uncover the truth about these violent crimes she finds herself identifying with the young victimsa bit too strongly Clues keep leading to dead ends forcing Camille to unravel the psychological puzzle of her own past to get at the story Dogged by her own demons Camille will have to confront what happened to her years before if she wants to survive this homecomingWith its taut crafted writing Sharp Objects is addictive haunting and unforgettable more",
    "upc": "e00eb4fd7b871a48"
  },
  {
    "title": "Sapiens: A Brief History of Humankind",
    "image": "https://books.toscrape.com/media/cache/be/a5/bea5697f2534a2f86a3ef27b5a8c12a6.jpg",
    "price": "£54.23",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/sapiens-a-brief-history-of-humankind_996/index.html",
    "desc": "From a renowned historian comes a groundbreaking narrative of humanitys creation and evolutiona 1 international bestsellerthat explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be humanOne hundred thousand years ago at least six different species of humans inhabited Earth Yet today there is only oneh From a renowned historian comes a groundbreaking narrative of humanitys creation and evolutiona 1 international bestsellerthat explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be humanOne hundred thousand years ago at least six different species of humans inhabited Earth Yet today there is only onehomo sapiens What happened to the others And what may happen to usMost books about the history of humanity pursue either a historical or a biological approach but Dr Yuval Noah Harari breaks the mold with this highly original book that begins about 70000 years ago with the appearance of modern cognition From examining the role evolving humans have played in the global ecosystem to charting the rise of empires Sapiens integrates history and science to reconsider accepted narratives connect past developments with contemporary concerns and examine specific events within the context of larger ideasDr Harari also compels us to look ahead because over the last few decades humans have begun to bend laws of natural selection that have governed life for the past four billion years We are acquiring the ability to design not only the world around us but also ourselves Where is this leading us and what do we want to becomeFeaturing 27 photographs 6 maps and 25 illustrationsdiagrams this provocative and insightful work is sure to spark debate and is essential reading for aficionados of Jared Diamond James Gleick Matt Ridley Robert Wright and Sharon Moalem more",
    "upc": "4165285e1663650f"
  },
  {
    "title": "The Requiem Red",
    "image": "https://books.toscrape.com/media/cache/68/33/68339b4c9bc034267e1da611ab3b34f8.jpg",
    "price": "£22.65",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/the-requiem-red_995/index.html",
    "desc": "Patient TwentynineA monster roams the halls of Soothing Hills Asylum Three girls dead 29 is endowed with the curseor gift of perception She hears messages in music sees lyrics in paintings And the corn A lifetime asylum resident the orchestral corn music is the only constant in her lifeMason a new kind orderly sees 29 as a woman not a lunatic And as his bel Patient TwentynineA monster roams the halls of Soothing Hills Asylum Three girls dead 29 is endowed with the curseor gift of perception She hears messages in music sees lyrics in paintings And the corn A lifetime asylum resident the orchestral corn music is the only constant in her lifeMason a new kind orderly sees 29 as a woman not a lunatic And as his belief in her grows so does her self confidence That perhaps she might escape might see the outside world But the monster has other plans The missing girls share one common threadeach was twentynines cell mate Will she be next more",
    "upc": "f77dbf2323deb740"
  },
  {
    "title": "The Dirty Little Secrets of Getting Your Dream Job",
    "image": "https://books.toscrape.com/media/cache/92/27/92274a95b7c251fea59a2b8a78275ab4.jpg",
    "price": "£33.34",
    "availability": "In stock",
    "rating": "Four",
    "detailUrl": "https://books.toscrape.com/catalogue/the-dirty-little-secrets-of-getting-your-dream-job_994/index.html",
    "desc": "Drawing on his extensive experience evaluating applicants for his marketing agency and featuring stories based on reallife situations sample cover letters resumes and straightforward advice Don Raskins The Dirty Little Secrets of Getting Your Dream Job offers all the necessary tools for navigating the tough job market and securing your dream jobDon Raskin owns and Drawing on his extensive experience evaluating applicants for his marketing agency and featuring stories based on reallife situations sample cover letters resumes and straightforward advice Don Raskins The Dirty Little Secrets of Getting Your Dream Job offers all the necessary tools for navigating the tough job market and securing your dream jobDon Raskin owns and operates MME an advertising and marketing agency in New York City During his twentyfive years at the agency he has interviewed hundreds of new college graduates for positions within his agency and has placed a strong emphasis on entrylevel recruitment for positions in creative account management traffic and production Raskin has also mentored countless students and their parents on best practices for the job search Over the years Raskin has kept exceptionally detailed notes on the interviews he has conducted observing the good the bad the ridiculous the irreverent He also has a treasure trove of overthetop cover letters resumes interviews and post interview followups he has conducted and received Now he wants to share all the wisdom and insider secrets he has gathered to help students and firsttime job seekers find a job in this economyBased on his remarkable expertise Raskins book provides exclusive insight into the job search process and lets readers in on all of the dirty little secrets to landing their first jobor a new oneand finding career success more",
    "upc": "2597b5a345f45e1b"
  },
  {
    "title": "The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull",
    "image": "https://books.toscrape.com/media/cache/3d/54/3d54940e57e662c4dd1f3ff00c78cc64.jpg",
    "price": "£17.93",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/the-coming-woman-a-novel-based-on-the-life-of-the-infamous-feminist-victoria-woodhull_993/index.html",
    "desc": "If you have a heart if you have a soul Karen Hicks The Coming Woman will make you fall in love with Victoria WoodhullKinky Friedman author and Governor of the Heart of Texas What kind of confidence would it take for a woman to buck the old boys club of politics in 1872 More than 140 years preHillary there was Victoria Woodhull This book takes you back with a If you have a heart if you have a soul Karen Hicks The Coming Woman will make you fall in love with Victoria WoodhullKinky Friedman author and Governor of the Heart of Texas What kind of confidence would it take for a woman to buck the old boys club of politics in 1872 More than 140 years preHillary there was Victoria Woodhull This book takes you back with a breathtaking presenttense birds eye view into a time when womens liberation was primarily confined to one womans very capable independent mind I couldnt put it downRuth Buzzi Golden Globe Award winner and Television Hall of Fame inducteeSadly too many Americans have never heard of Victoria Woodhull let alone learned of her story her revolutionary campaign for the presidency at a time when women werent even allowed to vote her support for workers rights or her feminist commitment to equality a century before the official battle over the Equal Rights Amendment But in The Coming Woman Karen Hicks brings Woodhulls efforts to life and reminds us that some of our nations greatest figures arent always featured in the history books It is a riveting account of an amazing woman and her struggle for justice and human dignity told in an engaging and eminently readable styleTim Wise author White Like Me Reflections on Race from a Privileged SonThe Coming Woman is a novel based on the life of feminist Victoria Woodhull the first woman to run for US President 50 years before women could even voteRunning for President wasnt Victorias only first as a woman She was also the first to own a successful Wall Street firm the first to publish a successful national newspaper and the first to head the twomillionmember Spiritualist Association She was the first woman to enter the Senate Judiciary Committee chambers to petition for womans suffrage her argument changing the entire focus of the suffragist movement by pointing out that the 14th and 15th Amendments already gave women the voteIn her campaign for the Presidency Victoria Woodhull boldly addressed many of the issues we still face today equal pay for equal work freedom in love corporate greed and political corruption fueled by powerful lobbyists and the increasing disparity between the rich and the poor to name only a few Her outspoken and commonsense ideas may shed a new perspective on the parallel conundrums of todays worldThis bold beautiful and sexually progressive woman dared to take on society and religion To make an example of the hypocrisy in what Mark Twain dubbed The Gilded Age she exposed the extramarital affairs of the most popular religious figure of the day Henry Ward Beecher This led to her persecution and imprisonment and the longest most infamous trial of the 19th century But it did not stop her fight for equalityVictorias epic story set in the late 1800s comes to life in a modern fictional style while staying true to the actual words and views of the many wellknown characters more",
    "upc": "e72a5dfc7e9267b2"
  },
  {
    "title": "The Boys in the Boat: Nine Americans and Their Epic Quest for Gold at the 1936 Berlin Olympics",
    "image": "https://books.toscrape.com/media/cache/66/88/66883b91f6804b2323c8369331cb7dd1.jpg",
    "price": "£22.60",
    "availability": "In stock",
    "rating": "Four",
    "detailUrl": "https://books.toscrape.com/catalogue/the-boys-in-the-boat-nine-americans-and-their-epic-quest-for-gold-at-the-1936-berlin-olympics_992/index.html",
    "desc": "For readers of Laura Hillenbrands Seabiscuit and Unbroken the dramatic story of the American rowing team that stunned the world at Hitlers 1936 Berlin Olympics Daniel James Browns robust book tells the story of the University of Washingtons 1936 eightoar crew and their epic quest for an Olympic gold medal a team that transformed the sport and grabbed the attention o For readers of Laura Hillenbrands Seabiscuit and Unbroken the dramatic story of the American rowing team that stunned the world at Hitlers 1936 Berlin Olympics Daniel James Browns robust book tells the story of the University of Washingtons 1936 eightoar crew and their epic quest for an Olympic gold medal a team that transformed the sport and grabbed the attention of millions of Americans The sons of loggers shipyard workers and farmers the boys defeated elite rivals first from eastern and British universities and finally the German crew rowing for Adolf Hitler in the Olympic games in Berlin 1936 The emotional heart of the story lies with one rower Joe Rantz a teenager without family or prospects who rows not for glory but to regain his shattered selfregard and to find a place he can call home The crew is assembled by an enigmatic coach and mentored by a visionary eccentric British boat builder but it is their trust in each other that makes them a victorious team They remind the country of what can be done when everyone quite literally pulls togethera perfect melding of commitment determination and optimism Drawing on the boys own diaries and journals their photos and memories of a onceinalifetime shared dream The Boys in the Boat is an irresistible story about beating the odds and finding hope in the most desperate of timesthe improbable intimate story of nine workingclass boys from the American west who in the depths of the Great Depression showed the world what true grit really meant It will appeal to readers of Erik Larson Timothy Egan James Bradley and David Halberstams The Amateurs more",
    "upc": "e10e1e165dc8be4a"
  },
  {
    "title": "The Black Maria",
    "image": "https://books.toscrape.com/media/cache/58/46/5846057e28022268153beff6d352b06c.jpg",
    "price": "£52.15",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/the-black-maria_991/index.html",
    "desc": "Praise for Aracelis GirmayGirmays every lossshe calls them estrangementsis a yearning for connection across time and place her every fragment is a bulwark against ruin O The Oprah Magazine In Aracelis Girmay we have a poet who collects polishes and shares stories with such brilliant invention tenderness and intellectual liveliness that it is understandabl Praise for Aracelis GirmayGirmays every lossshe calls them estrangementsis a yearning for connection across time and place her every fragment is a bulwark against ruin O The Oprah Magazine In Aracelis Girmay we have a poet who collects polishes and shares stories with such brilliant invention tenderness and intellectual liveliness that it is understandable that we think of her as the blessed curator of our collective histories There is in her art the vulnerability of one who lives inside of the stories that she gathers in this remarkable collection Her poems set off alarms even as they transform the world she inhabits showing us in the process exactly what she asks of Romare Beardens art how not to assign all blackness near the sea a captivity This is one of the many sweet contradictions in the black maria which is a black flag wounding the pastoral I am deeply thankful that we have a poet of her unique and singular talent writing today Kwame DawesTaking its name from the moons dark plains misidentified as seas by early astronomers the black maria investigates African diasporic histories the consequences of racism within American culture and the question of human identity Central to this project is a desire to recognize the lives of Eritrean refugees who have been made invisible by years of immigration crisis refugee status exile and resulting statelessness The recipient of a 2015 Whiting Award for Poetry Girmays newest collection elegizes and celebrates life while wrestling with the humanistic notion of seeing beyond seeing violence seeing grace and seeing each other betterto the seagreat storage house historyon which we rode we touchedthe brief pulse of your flutteringpages spelled with salt lifeyour rage your indifferenceyour gentleness washing our feetall of you going onwhether or not we liveto you we bring our carnationsyellow pink how they floatlike bright sentences atopyour memorys dark hairAracelis Girmay is the author of three poetry collections the black maria Kingdom Animalia which won the Isabella Gardner Award and was a finalist for the NBCC Award and Teeth The recipient of a 2015 Whiting Award she has received grants and fellowships from the Jerome Cave Canem and Watson foundations as well as Civitella Ranieri and the NEA She currently teaches at Hampshire Colleges School for Interdisciplinary Arts and in Drew Universitys low residency MFA program Originally from Santa Ana California she splits her time between New York and Amherst Massachusetts more",
    "upc": "1dfe412b8ac00530"
  },
  {
    "title": "Starving Hearts (Triangular Trade Trilogy, #1)",
    "image": "https://books.toscrape.com/media/cache/be/f4/bef44da28c98f905a3ebec0b87be8530.jpg",
    "price": "£13.99",
    "availability": "In stock",
    "rating": "Two",
    "detailUrl": "https://books.toscrape.com/catalogue/starving-hearts-triangular-trade-trilogy-1_990/index.html",
    "desc": "Since her assault Miss Annette Chetwynd has been plagued by nightmares and worries about an arranged marriage But she yearns to find her anonymous rescuer Unfortunately her health and intellect prevent it Both repel suitors and cause Annette to doubt Gods existence at least until He answers her prayers in an unusual way Mr Peter Adsley is joining the clergy an Since her assault Miss Annette Chetwynd has been plagued by nightmares and worries about an arranged marriage But she yearns to find her anonymous rescuer Unfortunately her health and intellect prevent it Both repel suitors and cause Annette to doubt Gods existence at least until He answers her prayers in an unusual way Mr Peter Adsley is joining the clergy and he desires a godly wife by his side After his failed attempt to obtain one he engages in a clandestine meeting with the bewitching young woman who keeps crossing his path But she is so unsettling Destined for disappointments Peter and Annette endure disgraceful situations Will Peters faith sustain him through overwhelming setbacks Can Annette overcome her doubts Or will their starving hearts yield to the machinations of a mad man more",
    "upc": "0312262ecafa5a40"
  },
  {
    "title": "Shakespeare's Sonnets",
    "image": "https://books.toscrape.com/media/cache/10/48/1048f63d3b5061cd2f424d20b3f9b666.jpg",
    "price": "£20.66",
    "availability": "In stock",
    "rating": "Four",
    "detailUrl": "https://books.toscrape.com/catalogue/shakespeares-sonnets_989/index.html",
    "desc": "This book is an important and complete collection of the Sonnets of William Shakespeare Most readers are aware of the great plays and manuscripts written for the stage but are unaware of the magnificent Sonnets which were written around the same period This is an excellent complete collection of the Sonnets and poetry of William Shakespeare and should not be missed by This book is an important and complete collection of the Sonnets of William Shakespeare Most readers are aware of the great plays and manuscripts written for the stage but are unaware of the magnificent Sonnets which were written around the same period This is an excellent complete collection of the Sonnets and poetry of William Shakespeare and should not be missed by those interested in the completion of a collection of his writings and those interested in early poetic works more",
    "upc": "30a7f60cd76ca58c"
  },
  {
    "title": "Set Me Free",
    "image": "https://books.toscrape.com/media/cache/5b/88/5b88c52633f53cacf162c15f4f823153.jpg",
    "price": "£17.46",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/set-me-free_988/index.html",
    "desc": "Aaron Ledbetters future had been planned out for him since before he was born Each year the Ledbetter family vacation on Tybee Island gave Aaron a chance to briefly free himself from his familys expectations When he meets Jonas Lucky Luckett a caricature artist in town with the traveling carnival he must choose between the life thats been mapped out for him and Aaron Ledbetters future had been planned out for him since before he was born Each year the Ledbetter family vacation on Tybee Island gave Aaron a chance to briefly free himself from his familys expectations When he meets Jonas Lucky Luckett a caricature artist in town with the traveling carnival he must choose between the life thats been mapped out for him and the chance at true love more",
    "upc": "ce6396b0f23f6ecc"
  },
  {
    "title": "Scott Pilgrim's Precious Little Life (Scott Pilgrim #1)",
    "image": "https://books.toscrape.com/media/cache/94/b1/94b1b8b244bce9677c2f29ccc890d4d2.jpg",
    "price": "£52.29",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/scott-pilgrims-precious-little-life-scott-pilgrim-1_987/index.html",
    "desc": "Scott Pilgrims life is totally sweet Hes 23 years old hes in a rockband hes between jobs and hes dating a cute high school girl Nothing could possibly go wrong unless a seriously mindblowing dangerously fashionable rollerblading delivery girl named Ramona Flowers starts cruising through his dreams and sailing by him at parties Will Scotts awesome life get Scott Pilgrims life is totally sweet Hes 23 years old hes in a rockband hes between jobs and hes dating a cute high school girl Nothing could possibly go wrong unless a seriously mindblowing dangerously fashionable rollerblading delivery girl named Ramona Flowers starts cruising through his dreams and sailing by him at parties Will Scotts awesome life get turned upsidedown Will he have to face Ramonas seven evil exboyfriends in battle The short answer is yes The long answer is Scott Pilgrim Volume 1 Scott Pilgrims Precious Little Life more",
    "upc": "3b1c02bac2a429e6"
  },
  {
    "title": "Rip it Up and Start Again",
    "image": "https://books.toscrape.com/media/cache/81/c4/81c4a973364e17d01f217e1188253d5e.jpg",
    "price": "£35.02",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/rip-it-up-and-start-again_986/index.html",
    "desc": "Punks raw power rejuvenated rock but by the summer of 1977 the movement had become a parody of itself RIP IT UP AND START AGAIN is a celebration of what happened nextPostpunk bands like PiL Joy Division Talking Heads The Fall and The Human League dedicated themselves to fulfilling punks unfinished musical revolution The postpunk groups were fervent modernists w Punks raw power rejuvenated rock but by the summer of 1977 the movement had become a parody of itself RIP IT UP AND START AGAIN is a celebration of what happened nextPostpunk bands like PiL Joy Division Talking Heads The Fall and The Human League dedicated themselves to fulfilling punks unfinished musical revolution The postpunk groups were fervent modernists whether experimenting with electronics and machine rhythm or adapting ideas from dub reggae and disco they were totally confident they could invent a whole new future for music more",
    "upc": "a34ba96d4081e6a4"
  },
  {
    "title": "Our Band Could Be Your Life: Scenes from the American Indie Underground, 1981-1991",
    "image": "https://books.toscrape.com/media/cache/54/60/54607fe8945897cdcced0044103b10b6.jpg",
    "price": "£57.25",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/our-band-could-be-your-life-scenes-from-the-american-indie-underground-1981-1991_985/index.html",
    "desc": "This is the neverbeforetold story of the musical revolution that happened right under the nose of the Reagan Eightieswhen a small but sprawling network of bands labels fanzines radio stations and other subversives reenergized American rock with punk rocks doityourself credo and created music that was deeply personal often brilliant always challenging and imme This is the neverbeforetold story of the musical revolution that happened right under the nose of the Reagan Eightieswhen a small but sprawling network of bands labels fanzines radio stations and other subversives reenergized American rock with punk rocks doityourself credo and created music that was deeply personal often brilliant always challenging and immensely influential This sweeping chronicle of music politics drugs fear loathing and faith has been recognized as an indie rock classic in its own right Among the bands profiled Mission of Burma Butthole Surfers The Minutemen Sonic Youth Black Flag Big Black Husker Du Fugazi Minor Threat Mudhoney The Replacements Beat Happening and Dinosaur Jr more",
    "upc": "deda3e61b9514b83"
  },
  {
    "title": "Olio",
    "image": "https://books.toscrape.com/media/cache/55/33/553310a7162dfbc2c6d19a84da0df9e1.jpg",
    "price": "£23.88",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/olio_984/index.html",
    "desc": "Part fact part fiction Tyehimba Jesss much anticipated second book weaves sonnet song and narrative to examine the lives of mostly unrecorded African American performers directly before and after the Civil War up to World War I Olio is an effort to understand how they met resisted complicated coopted and sometimes defeated attempts to minstrelize themSo while Part fact part fiction Tyehimba Jesss much anticipated second book weaves sonnet song and narrative to examine the lives of mostly unrecorded African American performers directly before and after the Civil War up to World War I Olio is an effort to understand how they met resisted complicated coopted and sometimes defeated attempts to minstrelize themSo while I lead this choir I still find thatIm being ledIm a missionarymending my faith in the midst of this flockI toil in their fields of praise When folks seethese freedmen stand and sing they hear their Godspeak in tongues These nine dark mouths sing shelterthey echo a hymns haven from slaverys weatherDetroit native Tyehimba Jess first book of poetry leadbelly was a winner of the 2004 National Poetry Series Jess a Cave Canem and NYU Alumni has received fellowships from the Whiting Foundation National Endowment for the Arts Illinois Arts Council and the Provincetown Fine Arts Work Center Jess is also a veteran of the 2000 and 2001 Green Mill Poetry Slam Team He exhibited his poetry at the 2011 TEDxNashville Conference Jess is an Associate Professor of English at College of Staten Island more",
    "upc": "feb7cc7701ecf901"
  },
  {
    "title": "Mesaerion: The Best Science Fiction Stories 1800-1849",
    "image": "https://books.toscrape.com/media/cache/09/a3/09a3aef48557576e1a85ba7efea8ecb7.jpg",
    "price": "£37.59",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/mesaerion-the-best-science-fiction-stories-1800-1849_983/index.html",
    "desc": "Andrew Barger awardwinning author and engineer has extensively researched forgotten journals and magazines of the early 19th century to locate groundbreaking science fiction short stories in the English language In doing so he found what is possibly the first science fiction story by a female and it is not from Mary Shelley Andrew located the first steampunk short Andrew Barger awardwinning author and engineer has extensively researched forgotten journals and magazines of the early 19th century to locate groundbreaking science fiction short stories in the English language In doing so he found what is possibly the first science fiction story by a female and it is not from Mary Shelley Andrew located the first steampunk short story which has not been republished since 1844 There is the first voyage to the moon in a balloon republished for the first time since 1820 that further tells of a darkness machine and a lunarian named Zuloc Other scistories include the first robotic insect and an electricity gun Once again Andrew has searched old texts to find the very best science fiction stories from the period when the genre automated to life some of the stories are published for the first time in nearly 200 years Read these fantastic stories todayOUR OWN COUNTRY So mechanical has the age become that men seriously talk of flying machines to go by steam not your airballoons but real Daedalian wings made of wood and joints nailed to your shoulder not wings of feathers and wax like the wings of Icarus who fell into the Cretan sea but real solid substantial rockmaple wings with wroughtiron hinges and huge concavities to propel us through the air Knickerbocker Magazine May 18 more",
    "upc": "e30f54cea9b38190"
  },
  {
    "title": "Libertarianism for Beginners",
    "image": "https://books.toscrape.com/media/cache/0b/bc/0bbcd0a6f4bcd81ccb1049a52736406e.jpg",
    "price": "£51.33",
    "availability": "In stock",
    "rating": "Two",
    "detailUrl": "https://books.toscrape.com/catalogue/libertarianism-for-beginners_982/index.html",
    "desc": "Libertarianism isnt about winning elections it is first and foremost a political philosophya description of how in the opinion of libertarians free people ought to treat one another at least when they use the law which they regard as potentially dangerous If libertarians are correct the law should intrude into peoples lives as little as possible rarely telling Libertarianism isnt about winning elections it is first and foremost a political philosophya description of how in the opinion of libertarians free people ought to treat one another at least when they use the law which they regard as potentially dangerous If libertarians are correct the law should intrude into peoples lives as little as possible rarely telling them what to do or how to liveA political and economic philosophy as old as John Locke and John Stuart Mill but as alive and timely as Rand Paul the Tea Party and the novels of Ayn Rand libertarianism emphasizes individual rights and calls for a radical reduction in the power and size of government Libertarianism For Beginners lays out the history and principles of this oftenmisunderstood philosophy in lucid dispassionate terms that help illuminate todays political dialogue more",
    "upc": "a18a4f574854aced"
  },
  {
    "title": "It's Only the Himalayas",
    "image": "https://books.toscrape.com/media/cache/27/a5/27a53d0bb95bdd88288eaf66c9230d7e.jpg",
    "price": "£45.17",
    "availability": "In stock",
    "rating": "Two",
    "detailUrl": "https://books.toscrape.com/catalogue/its-only-the-himalayas_981/index.html",
    "desc": "Wherever you go whatever you do just dont do anything stupid My MotherDuring her yearlong adventure backpacking from South Africa to Singapore S Bedford definitely did a few things her mother might classify as stupid She swam with great white sharks in South Africa ran from lions in Zimbabwe climbed a Himalayan mountain without training in Nepal and wa Wherever you go whatever you do just dont do anything stupid My MotherDuring her yearlong adventure backpacking from South Africa to Singapore S Bedford definitely did a few things her mother might classify as stupid She swam with great white sharks in South Africa ran from lions in Zimbabwe climbed a Himalayan mountain without training in Nepal and watched as her friend was attacked by a monkey in IndonesiaBut interspersed in those slightly more crazy moments Sue Bedfored and her friend Sara the Stoic experienced the sights sounds life and culture of fifteen countries Joined along the way by a few friends and their aging fathers here and there Sue and Sara experience the trip of a lifetime They fall in love with the world cultivate an appreciation for home and discover who or what they want to becomeIts Only the Himalayas is the incredibly funny sometimes outlandish always entertaining confession of a young backpacker that will inspire you to take your own adventure more",
    "upc": "a22124811bfa8350"
  },
  {
    "title": "In Her Wake",
    "image": "https://books.toscrape.com/../media/cache/5d/72/5d72709c6a7a9584a4d1cf07648bfce1.jpg",
    "price": "£12.84",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/in-her-wake_980/index.html",
    "desc": "A perfect life until she discovered it wasnt her ownA tragic family event reveals devastating news that rips apart Bellas comfortable existence Embarking on a personal journey to uncover the truth she faces a series of traumatic discoveries that take her to the ruggedly beautiful Cornish coast where hidden truths past betrayals and a 25yearold mystery threaten n A perfect life until she discovered it wasnt her ownA tragic family event reveals devastating news that rips apart Bellas comfortable existence Embarking on a personal journey to uncover the truth she faces a series of traumatic discoveries that take her to the ruggedly beautiful Cornish coast where hidden truths past betrayals and a 25yearold mystery threaten not just her identity but also her lifeChilling complex and profoundly moving In Her Wake is a gripping psychological thriller that questions the nature of family and reminds us that sometimes the most shocking crimes are committed closest to home more",
    "upc": "23356462d1320d61"
  },
  {
    "title": "How Music Works",
    "image": "https://books.toscrape.com/../media/cache/5c/c8/5cc8e107246cb478960d4f0aba1e1c8e.jpg",
    "price": "£37.32",
    "availability": "In stock",
    "rating": "Two",
    "detailUrl": "https://books.toscrape.com/catalogue/how-music-works_979/index.html",
    "desc": "How Music Works is David Byrnes remarkable and buoyant celebration of a subject he has spent a lifetime thinking about In it he explores how profoundly music is shaped by its time and place and he explains how the advent of recording technology in the twentieth century forever changed our relationship to playing performing and listening to musicActing as historian an How Music Works is David Byrnes remarkable and buoyant celebration of a subject he has spent a lifetime thinking about In it he explores how profoundly music is shaped by its time and place and he explains how the advent of recording technology in the twentieth century forever changed our relationship to playing performing and listening to musicActing as historian and anthropologist raconteur and social scientist he searches for patternsand shows how those patterns have affected his own work over the years with Talking Heads and his many collaborators from Brian Eno to Caetano Veloso Byrne sees music as part of a larger almost Darwinian pattern of adaptations and responses to its cultural and physical context His range is panoptic taking us from Wagnerian opera houses to African villages from his earliest high school reeltoreel recordings to his latest work in a home music studio and all the big studios in betweenTouching on the joy the physics and even the business of making music How Music Works is a brainy irresistible adventure and an impassioned argument about musics liberating lifeaffirming power more",
    "upc": "327f68a59745c102"
  },
  {
    "title": "Foolproof Preserving: A Guide to Small Batch Jams, Jellies, Pickles, Condiments, and More: A Foolproof Guide to Making Small Batch Jams, Jellies, Pickles, Condiments, and More",
    "image": "https://books.toscrape.com/../media/cache/9f/59/9f59f01fa916a7bb8f0b28a4012179a4.jpg",
    "price": "£30.52",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/foolproof-preserving-a-guide-to-small-batch-jams-jellies-pickles-condiments-and-more-a-foolproof-guide-to-making-small-batch-jams-jellies-pickles-condiments-and-more_978/index.html",
    "desc": "Canning perfected the Americas Test Kitchen way The art of preserving produce by canning and preserving has come full circle from grandmothers kitchen to a whole new generation now eager to learn it This detailed guide to home preserving is perfect for novice canners and experts alike and offers more than 100 foolproof recipes across a wide range of categories from sw Canning perfected the Americas Test Kitchen way The art of preserving produce by canning and preserving has come full circle from grandmothers kitchen to a whole new generation now eager to learn it This detailed guide to home preserving is perfect for novice canners and experts alike and offers more than 100 foolproof recipes across a wide range of categories from sweet jams and jellies to savory jams vegetables condiments pickles whole fruits and more Let the experts at Americas Test Kitchen show you how to do it right with detailed tutorials troubleshooting tips equipment information and insight into the science behind canning more",
    "upc": "5674a18a29a43ced"
  },
  {
    "title": "Chase Me (Paris Nights #2)",
    "image": "https://books.toscrape.com/../media/cache/9c/2e/9c2e0eb8866b8e3f3b768994fd3d1c1a.jpg",
    "price": "£25.27",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/chase-me-paris-nights-2_977/index.html",
    "desc": "A Michelin twostar chef at twentyeight Violette Lenoir could handle anything including a cocky burglar who broke into her restaurant in the middle of the nightOr so she thoughtElite counterterrorist operative Chase Smith had been through things that made Hell Week look easy But nothing had prepared him for a leatherclad blonde who held him at bay at knifepoint an A Michelin twostar chef at twentyeight Violette Lenoir could handle anything including a cocky burglar who broke into her restaurant in the middle of the nightOr so she thoughtElite counterterrorist operative Chase Smith had been through things that made Hell Week look easy But nothing had prepared him for a leatherclad blonde who held him at bay at knifepoint and dared him to take her onNow if only saving the world didnt require he ruin her lifeTwo people who thought they could handle anything now have to take on each other Its a battle neither one expected But with their futures on the line they have nothing to losebut their heartsWarning This book contains one arrogant Navy SEAL nights of Paris passion and a woman who wants to have it all more",
    "upc": "c2e46a2ee3b4a322"
  },
  {
    "title": "Black Dust",
    "image": "https://books.toscrape.com/../media/cache/44/cc/44ccc99c8f82c33d4f9d2afa4ef25787.jpg",
    "price": "£34.53",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/black-dust_976/index.html",
    "desc": "No matter how busy he keeps himself successful Broadway musician Tobias Spence cant outrun the memory of a tragic car crash from his past that claimed a friends life and permanently injured his former boyfriend EmmettEven after losing Tobias Emmett Henderson made peace with that awful night living in his Indiana hometown where he has become a revered choral director No matter how busy he keeps himself successful Broadway musician Tobias Spence cant outrun the memory of a tragic car crash from his past that claimed a friends life and permanently injured his former boyfriend EmmettEven after losing Tobias Emmett Henderson made peace with that awful night living in his Indiana hometown where he has become a revered choral director When his students are asked to perform in New York City he decides to chance reconnecting with his former love if for no other reason than to get a proper goodbyeWhen Emmett and Tobias finally meet 15 years after parting ways it is clear to both of them that their feelings for each other have not changed As they explore their renewed relationship the two men face old hurts and the new challenges of a longdistance romance Will Tobias lose his second chance at love to the ghosts he cant seem to put to rest more",
    "upc": "00bfed9e18bb36f3"
  },
  {
    "title": "Birdsong: A Story in Pictures",
    "image": "https://books.toscrape.com/../media/cache/af/6e/af6e796160fe63e0cf19d44395c7ddf2.jpg",
    "price": "£54.64",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/birdsong-a-story-in-pictures_975/index.html",
    "desc": "Bring the thrilling story of one red bird to life When an innocent bird meets two cruel kids their world is forever changed But exactly how that change unfolds is up to you in the tradition of KamishibaiJapanese paper theater The wordless story by master cartoonist James Sturm is like a haikuthe elegant images leave space for children to inhabit this timeless talea Bring the thrilling story of one red bird to life When an innocent bird meets two cruel kids their world is forever changed But exactly how that change unfolds is up to you in the tradition of KamishibaiJapanese paper theater The wordless story by master cartoonist James Sturm is like a haikuthe elegant images leave space for children to inhabit this timeless taleand make it their own leading them to learn an ultimate lesson theyll never forgetJames Sturm is the author of several books for kids including the Adventures in Cartooning series with Andrew Arnold and Alexis FrederickFrost and the forthcoming Ape and Armadillo James also helped start a college for cartoonists The Center for Cartoon Studies in the small railroad village of White River Junction Vermont more",
    "upc": "9528d0948525bf5f"
  },
  {
    "title": "America's Cradle of Quarterbacks: Western Pennsylvania's Football Factory from Johnny Unitas to Joe Montana",
    "image": "https://books.toscrape.com/../media/cache/ef/0b/ef0bed08de4e083dba5e20fdb98d9c36.jpg",
    "price": "£22.50",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/americas-cradle-of-quarterbacks-western-pennsylvanias-football-factory-from-johnny-unitas-to-joe-montana_974/index.html",
    "desc": "Any fan of the Baltimore Colts of my era any fan of my friend and teammate Johnny Unitas or for that matter any fan of football in general should enjoy Wayne Stewarts book It contains great stories statistics and information on all of the many great quarterbacks whocame out of Western Pennsylvania and much more Raymond Berry NFL Hall of Fame Wide Receiver Its wel Any fan of the Baltimore Colts of my era any fan of my friend and teammate Johnny Unitas or for that matter any fan of football in general should enjoy Wayne Stewarts book It contains great stories statistics and information on all of the many great quarterbacks whocame out of Western Pennsylvania and much more Raymond Berry NFL Hall of Fame Wide Receiver Its well known that the NFL has been dominated through the years by quarterbacks sown and grown in a relatively small area surrounding the city of Pittsburgh in Western Pennsylvania In Americas Cradle of Quarterbacks author Wayne Stewart not only tells us who they are he digs deep to explain the nature and nurture behind the rich harvest of signal callers Montana Unitas Marino Namath Kelly Blanda etc who have risen from that fertile soil to claim Lombardi Trophies and dominate the gallery of busts in the Pro Football Hall of Fame Stewart has written a fascinating book that belongs on the shelves of football historians and everyday fans alike Jeffrey J Miller Author of Rockin The Rockpile BuffalosForgotten Champions and Game Changers more",
    "upc": "c7d160c2c0de586f"
  },
  {
    "title": "Aladdin and His Wonderful Lamp",
    "image": "https://books.toscrape.com/../media/cache/d6/da/d6da0371958068bbaf39ea9c174275cd.jpg",
    "price": "£53.13",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/aladdin-and-his-wonderful-lamp_973/index.html",
    "desc": "Planning on seeing Aladdin the Disney musical Read the classic story of Aladdin and his Wonderful Lamp in this sparkling new edition by Harpendore Synopsis Aladdin is a poor boy who lives with his mother in the ancient kingdom of Cathay One day a strange man appears offering untold riches Aladdin is not so sure yet hes sorely tempted Join Aladdin on his incredib Planning on seeing Aladdin the Disney musical Read the classic story of Aladdin and his Wonderful Lamp in this sparkling new edition by Harpendore Synopsis Aladdin is a poor boy who lives with his mother in the ancient kingdom of Cathay One day a strange man appears offering untold riches Aladdin is not so sure yet hes sorely tempted Join Aladdin on his incredible adventures and visit the cave of treasures A world of magic awaits you but watch your step theres mischief lurking at every turn The Arabian Nights also known as The One Thousand and One Nights is an ancient collection of tales that have existed for thousands of years Harpendores Arabian Nights Adventures are beautifully retold versions of these ancient classics that are specially designed to appeal to children aged seven years and above They are written in a warm and accessible style and include wonderful illustrations inside With mischief and magic in equal measure this series is sure to captivate readers everywhere The Arabian Nights Adventures series is being released throughout 2016 and 2017 Stories to be included are The Adventures of Prince Camar Princess Badoura Aladdin and his Wonderful Lamp Gulnare of the Sea Ali Baba and the Forty Thieves The Seven Voyages of Sinbad the Sailor The Enchanted Horse The Talking Bird the Singing Tree and the Golden Water The Merchant and the Genie The Tale of Zubaidah and the Three Qalandars The Adventures of Harun alRashid Caliph of Baghdad The Three Princes the Princess and the Jinni Pari Banou The Fisherman and the Genie The Kings Jester also known as The Little Hunchback more",
    "upc": "904208d6aa64b655"
  },
  {
    "title": "Worlds Elsewhere: Journeys Around Shakespeare’s Globe",
    "image": "https://books.toscrape.com/../media/cache/2e/98/2e98c332bf8563b584784971541c4445.jpg",
    "price": "£40.30",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/worlds-elsewhere-journeys-around-shakespeares-globe_972/index.html",
    "desc": "Antiapartheid activist Bollywood screenwriter Nazi pinup hero of the Wild West this is Shakespeare as you have never seen him beforeFrom the sixteenthcentury Baltic to the American Revolution from colonial India to the skyscrapers of modernday Shanghai Shakespeares plays appear at the most fascinating of times and in the most unexpected of places No other writ Antiapartheid activist Bollywood screenwriter Nazi pinup hero of the Wild West this is Shakespeare as you have never seen him beforeFrom the sixteenthcentury Baltic to the American Revolution from colonial India to the skyscrapers of modernday Shanghai Shakespeares plays appear at the most fascinating of times and in the most unexpected of places No other writers work has been performed translated adapted and altered in such a remarkable variety of cultures and languages But what is it about William Shakespeare a man from Warwickshire who never once set foot outside England that has made him at home in so many places around the globeTravelling across four continents six countries and 400 years Andrew Dickson takes us on a personal journey rich in insight and surprise We enter the airconditioned vault deep beneath Capitol Hill where the worlds largest collection of First Folios is stored discover the shadowy history of Joseph Goebbelss obsession with Shakespeare and uncover the true story behind the scuffed edition in which Nelson Mandela and fellow Robben Island prisoners inscribed their names Both cultural history and literary travelogue Worlds Elsewhere is an attempt to understand how Shakespeare has become the international phenomenon he is and whyThere were very few pages on which I didnt learn something new or revelatory A mustread for anyone interested in Shakespeares impact on people and politics around the globe James Shapiro author of 1599 A Year in the Life of William ShakespeareImmensely wellinformed and highly readable A revelatory journey of cultural exploration Professor Stanley Wells General Editor of the Oxford and Penguin ShakespearesBrilliantly original Absolutely engaging witty and irresistible Whats most remarkable hes said something new about Shakespeare Michael Pye author of The Edge of the WorldA truly original book about Shakespeare one that explores the dramatists global reach with tenacity devotion and an exhilarating spirit of adventure Michael Billington more",
    "upc": "4c28def39d850cdf"
  },
  {
    "title": "Wall and Piece",
    "image": "https://books.toscrape.com/../media/cache/a5/41/a5416b9646aaa7287baa287ec2590270.jpg",
    "price": "£44.18",
    "availability": "In stock",
    "rating": "Four",
    "detailUrl": "https://books.toscrape.com/catalogue/wall-and-piece_971/index.html",
    "desc": "Banksy Britains nowlegendary guerilla street artist has painted the walls streets and bridges of towns and cities throughout the world Not only did he smuggle his pieces into four of New York Citys major art museums hes also hung his work at Londons Tate Gallery and adorned Israels West Bank barrier with satirical images Banksys identity remains unknown Banksy Britains nowlegendary guerilla street artist has painted the walls streets and bridges of towns and cities throughout the world Not only did he smuggle his pieces into four of New York Citys major art museums hes also hung his work at Londons Tate Gallery and adorned Israels West Bank barrier with satirical images Banksys identity remains unknown but his work is unmistakablewith prints selling for as much as 45000 more",
    "upc": "ccd9ffa25efabdea"
  },
  {
    "title": "The Four Agreements: A Practical Guide to Personal Freedom",
    "image": "https://books.toscrape.com/../media/cache/0f/7e/0f7ee69495c0df1d35723f012624a9f8.jpg",
    "price": "£17.66",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/the-four-agreements-a-practical-guide-to-personal-freedom_970/index.html",
    "desc": "In The Four Agreements don Miguel Ruiz reveals the source of selflimiting beliefs that rob us of joy and create needless suffering Based on ancient Toltec wisdom the Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom true happiness and love The Four Agreements are Be Impeccable With Your Word Dont In The Four Agreements don Miguel Ruiz reveals the source of selflimiting beliefs that rob us of joy and create needless suffering Based on ancient Toltec wisdom the Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom true happiness and love The Four Agreements are Be Impeccable With Your Word Dont Take Anything Personally Dont Make Assumptions Always Do Your Best more",
    "upc": "6258a1f6a6dcfe50"
  },
  {
    "title": "The Five Love Languages: How to Express Heartfelt Commitment to Your Mate",
    "image": "https://books.toscrape.com/../media/cache/38/c5/38c56fba316c07305643a8065269594e.jpg",
    "price": "£31.05",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/the-five-love-languages-how-to-express-heartfelt-commitment-to-your-mate_969/index.html",
    "desc": "Are you and your spouse speaking the same language While love is a many splendored thing it is sometimes a very confusing thing too And as people come in all varieties shapes and sizes so do their choices of personal expressions of love But more often than not the giver and the receiver express love in two different ways This can lead to misunderstanding quarrel Are you and your spouse speaking the same language While love is a many splendored thing it is sometimes a very confusing thing too And as people come in all varieties shapes and sizes so do their choices of personal expressions of love But more often than not the giver and the receiver express love in two different ways This can lead to misunderstanding quarrels and even divorceQuality time words of affirmation gifts acts of service and physical touch are the five basic love languages Dr Gary Chapman identifies these and guides couples towards a better understanding of their unique languages of love Learn to speak and understand your mates love language and in no time you will be able to effectively love and truly feel loved in return Skillful communication is within your grasp more",
    "upc": "3c039985229453bf"
  },
  {
    "title": "The Elephant Tree",
    "image": "https://books.toscrape.com/../media/cache/5d/7e/5d7ecde8e81513eba8a64c9fe000744b.jpg",
    "price": "£23.82",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/the-elephant-tree_968/index.html",
    "desc": "Mark Fallon is an overworked detective investigating a spate of attacks at a string of high profile city centre nightclubs Scott is a dejected 24 year old struggling to make ends meet working for his brother and supplementing his income with a smallscale drug dealing operation Angela is an attractive 23 year old raised by her father a career criminal and small time dr Mark Fallon is an overworked detective investigating a spate of attacks at a string of high profile city centre nightclubs Scott is a dejected 24 year old struggling to make ends meet working for his brother and supplementing his income with a smallscale drug dealing operation Angela is an attractive 23 year old raised by her father a career criminal and small time drug dealer who supplies Scott with cannabis This is a chilling tale spanning a few months in the lives of Scott and Angela where realizations about the present combine with shocking revelations from the past leading to an apocalyptic climax where they no longer know whom they can trust more",
    "upc": "5dada2b7be26bd03"
  },
  {
    "title": "The Bear and the Piano",
    "image": "https://books.toscrape.com/../media/cache/cf/bb/cfbb5e62715c6d888fd07794c9bab5d6.jpg",
    "price": "£36.89",
    "availability": "In stock",
    "rating": "One",
    "detailUrl": "https://books.toscrape.com/catalogue/the-bear-and-the-piano_967/index.html",
    "desc": "One day a young bear stumbles upon something he has never seen before in the forest As time passes he teaches himself how to play the strange instrument and eventually the beautiful sounds are heard by a father and son who are picnicking in the woods The bear goes with them on an incredible journey to New York where his piano playing makes him a huge star He has fam One day a young bear stumbles upon something he has never seen before in the forest As time passes he teaches himself how to play the strange instrument and eventually the beautiful sounds are heard by a father and son who are picnicking in the woods The bear goes with them on an incredible journey to New York where his piano playing makes him a huge star He has fame fortune and all the music in the world but he misses the friends and family he has left behind A moving tale of exploration and belonging from an exciting debut authorillustrator more",
    "upc": "9f6568e9c95f60b0"
  },
  {
    "title": "Sophie's World",
    "image": "https://books.toscrape.com/../media/cache/65/71/6571919836ec51ed54f0050c31d8a0cd.jpg",
    "price": "£15.94",
    "availability": "In stock",
    "rating": "Five",
    "detailUrl": "https://books.toscrape.com/catalogue/sophies-world_966/index.html",
    "desc": "A pageturning novel that is also an exploration of the great philosophical concepts of Western thought Sophies World has fired the imagination of readers all over the world with more than twenty million copies in printOne day fourteenyearold Sophie Amundsen comes home from school to find in her mailbox two notes with one question on each Who are you and Where A pageturning novel that is also an exploration of the great philosophical concepts of Western thought Sophies World has fired the imagination of readers all over the world with more than twenty million copies in printOne day fourteenyearold Sophie Amundsen comes home from school to find in her mailbox two notes with one question on each Who are you and Where does the world come from From that irresistible beginning Sophie becomes obsessed with questions that take her far beyond what she knows of her Norwegian village Through those letters she enrolls in a kind of correspondence course covering Socrates to Sartre with a mysterious philosopher while receiving letters addressed to another girl Who is Hilde And why does her mail keep turning up To unravel this riddle Sophie must use the philosophy she is learningbut the truth turns out to be far more complicated than she could have imagined more",
    "upc": "6be3beb0793a53e7"
  },
  {
    "title": "Penny Maybe",
    "image": "https://books.toscrape.com/../media/cache/12/53/1253c21c5ef3c6d075c5fa3f5fecee6a.jpg",
    "price": "£33.29",
    "availability": "In stock",
    "rating": "Three",
    "detailUrl": "https://books.toscrape.com/catalogue/penny-maybe_965/index.html",
    "desc": "Sent to yet another foster family Penny decides that the way to claim a sense of self is to swim Lake Ontario Although this seems impossible she finds the courage to ask her physics teacher to be her coach and wins the support of her new foster mother",
    "upc": "668fe56b17cfcd4f"
  },
  {
    "title": "Maude (1883-1993):She Grew Up with the country",
    "image": "https://books.toscrape.com/../media/cache/f5/88/f5889d038f5d8e949b494d147c2dcf54.jpg",
    "price": "£18.02",
    "availability": "In stock",
    "rating": "Two",
    "detailUrl": "https://books.toscrape.com/catalogue/maude-1883-1993she-grew-up-with-the-country_964/index.html",
    "desc": "This new edition of Maude 18831993 has been updated by Mardo Williams daughters adding historical details their dad wished to make twice as many photos and nine appendices not present in the 1996 hardcover which won an Ohioana Library Award for its author During her 110year lifetime Maude went from a 400lb woodburning stove to a microwave oven from an outdo This new edition of Maude 18831993 has been updated by Mardo Williams daughters adding historical details their dad wished to make twice as many photos and nine appendices not present in the 1996 hardcover which won an Ohioana Library Award for its author During her 110year lifetime Maude went from a 400lb woodburning stove to a microwave oven from an outdoor privy to indoor plumbing She got the vote in 1920 and voted in the next 18 Presidential electionsWith poetry and human dramas two murders and a suicide written by a master journalist the book shows the impact of the changing times on shy unassuming Maude her funloving husband Lee and their four active children They farmed 100 acres on the banks of Rush Creek in Logan County OhioA favorite with book discussion groups Maude has been adopted by several colleges for use as a supplemental American history text more",
    "upc": "094b269567e1c300"
  }]

```
