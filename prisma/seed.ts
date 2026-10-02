import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const questions = [
  {
    questionKey: "S1-Q0",
    text: "Naskórek ludzki jest zbudowany z:",
    options: [
      "jednowarstwowego nabłonka płaskiego nierogowaciejącego",
      "jednowarstwowego nabłonka płaskiego rogowaciejącego",
      "wielowarstwowego nabłonka płaskiego nierogowaciejącego",
      "wielowarstwowego nabłonka płaskiego rogowaciejącego",
    ],
    correct: [3],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź D. Naskórek stanowi wielowarstwowy nabłonek płaski rogowaciejący.",
  },
  {
    questionKey: "S1-Q1",
    text: "W jamie nosowej, krtani, tchawicy i oskrzelach występuje nabłonek:",
    options: [
      "jednowarstwowy płaski",
      "jednowarstwowy walcowaty",
      "wielowarstwowy płaski",
      "pseudowarstwowy",
    ],
    correct: [3],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź D. W drogach oddechowych typowy jest nabłonek wielorzędowy (pseudowarstwowy) walcowaty, zwykle urzęsiony.",
  },
  {
    questionKey: "S1-Q2",
    text: "W jelicie cienkim człowieka występuje nabłonek:",
    options: [
      "jednowarstwowy walcowaty",
      "jednowarstwowy płaski",
      "wielowarstwowy płaski",
      "jednowarstwowy sześcienny",
    ],
    correct: [0],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź A. Jelito cienkie jest wyścielone nabłonkiem jednowarstwowym walcowatym.",
  },
  {
    questionKey: "S1-Q3",
    text: "Komórka nerwowa nosi nazwę:",
    options: [
      "nefronu",
      "neuronu",
      "neurytu",
      "neurolemmy",
    ],
    correct: [1],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote: "Odpowiedź B. Komórka nerwowa to neuron.",
  },
  {
    questionKey: "S1-Q4",
    text: "Komórki Schwanna to inaczej:",
    options: [
      "lemocyty",
      "neurocyty",
      "mielocyty",
      "neurony",
    ],
    correct: [0],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź A. Lemocyty, czyli komórki Schwanna, tworzą osłonki włókien nerwowych w obwodowym układzie nerwowym.",
  },
  {
    questionKey: "S1-Q5",
    text: "Wypustka doprowadzająca impulsy do ciała komórki nerwowej to:",
    options: [
      "akson",
      "neuron",
      "dendryt",
      "neuryt",
    ],
    correct: [2],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź C. Dendryty typowo przewodzą impulsy w kierunku ciała komórki nerwowej.",
  },
  {
    questionKey: "S1-Q6",
    text: "Wybierz prawidłowe stwierdzenie:",
    options: [
      "włókna bezrdzenne pozbawione są jakiejkolwiek osłonki",
      "włókna rdzenne przewodzą ze znacznie większą szybkością niż włókna bezrdzenne",
      "we włóknach bezrdzennych występuje skokowy typ przewodzenia",
      "mielina tworzy ciągłą osłonkę owijając się wokół aksonów",
    ],
    correct: [1],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź B. Włókna mielinowe (rdzenne) przewodzą impulsy znacznie szybciej dzięki przewodzeniu skokowemu.",
  },
  {
    questionKey: "S1-Q7",
    text: "Na schemacie cyframi 1, 2, 3 oznaczono:",
    options: [
      "1: perikarion, 2: neuryt, 3: dendryty",
      "1: perikarion, 2: dendryty, 3: neuron",
      "1: perikarion, 2: dendryty, 3: neuryt",
      "1: ciało komórki, 2: perikarion, 3: neuron",
    ],
    correct: [2],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź C. Na schemacie 1 wskazuje perikarion, 2 dendryty, a 3 neuryt (akson). Część wariantów odpowiedzi znajduje się na kolejnej stronie arkusza.",
  },
  {
    questionKey: "S1-Q8",
    text: "Nieprawdą jest, że:",
    options: [
      "synapsy występują wyłącznie na styku komórek nerwowych",
      "miejsce styku dwóch komórek",
      "zapewniają ciągłość czynnościową w układzie nerwowym",
      "umożliwiają przekazywanie impulsu nerwowego",
    ],
    correct: [0],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź A. Jest to stwierdzenie nieprawdziwe, ponieważ synapsy mogą łączyć neuron także z inną komórką pobudliwą, np. komórką mięśniową lub gruczołową. W bazie przyjmujemy odpowiedź zgodną z kluczem z zajęć.",
  },
  {
    questionKey: "S1-Q9",
    text: "Na schemacie cyframi oznaczono:",
    options: [
      "1: błona postsynaptyczna, 2: błona presynaptyczna, 3: pęcherzyki z mediatorem, 5: receptory białkowe",
      "1: błona presynaptyczna, 2: błona postsynaptyczna, 3: receptory białkowe, 5: pęcherzyki z mediatorem",
      "1: błona postsynaptyczna, 2: błona presynaptyczna, 3: receptory białkowe, 5: pęcherzyki z mediatorem",
      "1: błona presynaptyczna, 2: błona postsynaptyczna, 3: szczelina synaptyczna, 5: pęcherzyki z mediatorem",
    ],
    correct: [3],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź D. 1 — błona presynaptyczna, 2 — błona postsynaptyczna, 3 — szczelina synaptyczna, 5 — pęcherzyki z mediatorem.",
  },
  {
    questionKey: "S1-Q10",
    text: "Przedstawiony typ nabłonka występuje w:",
    options: [
      "jelicie cienkim",
      "pęcherzykach płucnych",
      "kanalikach nerkowych",
      "drogach oddechowych",
    ],
    correct: [1],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź B. Schemat przedstawia nabłonek jednowarstwowy płaski, typowy m.in. dla pęcherzyków płucnych.",
  },
  {
    questionKey: "S1-Q11",
    text: "Zadaniem komórek glejowych jest:",
    options: [
      "przewodzenie impulsów nerwowych",
      "ochrona komórek nerwowych",
      "odżywianie komórek nerwowych",
      "ochrona komórek nerwowych i odżywianie komórek nerwowych",
    ],
    correct: [3],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź D. Komórki glejowe pełnią m.in. funkcje ochronne, podporowe, odżywcze i izolacyjne.",
  },
  {
    questionKey: "S1-Q12",
    text: "Poziomy organizacji biologicznej przedstawia schemat:",
    options: [
      "atom → cząsteczka → organella → komórka → tkanka → organ → układ",
      "atom → organelle → cząsteczka → tkanka → komórka → organ → układ",
      "cząsteczka → atom → komórka → tkanka → narząd → układ",
    ],
    correct: [0],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź A. Prawidłowa kolejność obejmuje atom → cząsteczka → organella → komórka → tkanka → organ → układ.",
  },
  {
    questionKey: "S1-Q13",
    text: "Nauka o budowie i rozmieszczeniu tkanek to:",
    options: [
      "serologia",
      "histologia",
      "neurologia",
      "patologia",
    ],
    correct: [1],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź B. Histologia zajmuje się budową i organizacją tkanek.",
  },
  {
    questionKey: "S1-Q14",
    text: "Ciałka Nissla (tigroidy) to:",
    options: [
      "ciałka zmysłowe występujące w skórze",
      "ciałka zmysłowe występujące w dendrytach i aksonie",
      "ciałka zawierające DNA i rybosomy, występują w perikaryonie",
      "ciałka zawierające DNA, występują w komórkach nabłonkowych",
    ],
    correct: [2],
    questionType: "single",
    reviewStatus: "verified",
    reviewNote:
      "Odpowiedź C jest zgodna z kluczem ustalonym na zajęciach. W naszej bazie przyjmujemy ją jako poprawną odpowiedź egzaminacyjną.",
  },
  {
  questionKey: "S2-Q1",
  text: "Ścianę komórkową posiadają:",
  options: [
    "żadne prokarionty",
    "komórki zwierzęce",
    "komórki roślinne",
    "wszystkie eukarionty",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Odpowiedź zaznaczona na arkuszu: C.",
	},

	{
	  questionKey: "S2-Q2",
	  text: "Organella komórkowe to:",
	  options: [
		"substancja międzykomórkowa",
		"cytoplazma",
		"materiał genetyczny komórki",
		"funkcjonalne struktury wewnątrzkomórkowe",
	  ],
	  correct: [3],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: D.",
	},

	{
	  questionKey: "S2-Q3",
	  text: "Mitochondria są:",
	  options: [
		"centrami energetycznymi komórki",
		"organellami, w których zachodzą procesy hydrolityczne w komórce",
		"organellami odpowiedzialnymi za syntezę cholesterolu",
		"organellami, w których następuje synteza oligosacharydów",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q4",
	  text: "Rybosomy to organelle wyspecjalizowane w procesach:",
	  options: [
		"syntezy białek",
		"dziedziczeniu",
		"trawieniu pokarmu",
		"oddychaniu wewnątrzkomórkowym",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q5",
	  text: "Siateczka śródplazmatyczna gładka odpowiada za:",
	  options: [
		"produkcję białek",
		"syntezę węglowodanów i tłuszczów",
		"lizę białek, węglowodanów i tłuszczów",
		"produkcję energii",
	  ],
	  correct: [1],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: B.",
	},

	{
	  questionKey: "S2-Q8",
	  text: "Tkanka mięśniowa poprzecznie prążkowana buduje:",
	  options: [
		"mięsień sercowy",
		"mięśnie kostne",
		"ściany naczyń krwionośnych",
		"mięśnie szkieletowe",
	  ],
	  correct: [3],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Na arkuszu zaznaczone są odpowiedzi A i D.",
	},

	{
	  questionKey: "S2-Q9",
	  text: "Główną cechą limfocytów jest:",
	  options: [
		"transport tlenu i dwutlenku węgla",
		"udział w krzepnięciu krwi",
		"transport zbędnych metabolitów",
		"wytwarzanie immunoglobulin",
	  ],
	  correct: [3],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: D.",
	},

	{
	  questionKey: "S2-Q10",
	  text: "Idealnym dawcą jest grupa krwi:",
	  options: [
		"0",
		"AB",
		"tylko A",
		"tylko B",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q11",
	  text: "Elementami morfologicznymi krwi są:",
	  options: [
		"erytrocyty, albuminy, trombocyty",
		"erytrocyty, fibryna, immunoglobuliny",
		"leukocyty, erytrocyty, trombocyty",
		"monocyty, erytrocyty, fibrynogen",
	  ],
	  correct: [2],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: C.",
	},

	{
	  questionKey: "S2-Q12",
	  text: "Krew człowieka zawiera leukocyty w liczbie około:",
	  options: [
		"6–10 tysięcy/mm³ krwi",
		"300–400 tys./mm³ krwi",
		"4–6 mln/mm³ krwi",
		"2,5–3 mln/mm³ krwi",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q13",
	  text: "Śródbłonek naczyń należy do tkanki:",
	  options: [
		"nabłonkowej jednowarstwowej płaskiej",
		"nabłonkowej wielowarstwowej płaskiej",
		"łącznej właściwej",
		"mięśniowej gładkiej",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q14",
	  text: "Drogi oddechowe wyściela nabłonek:",
	  options: [
		"brukowy",
		"cylindryczny migawkowy",
		"jednowarstwowy płaski",
		"przejściowy",
	  ],
	  correct: [1],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: B.",
	},

	{
	  questionKey: "S2-Q15",
	  text: "Jednostką czynnościową mięśnia jest:",
	  options: [
		"osteocyty",
		"miocyt",
		"sarkomer",
		"miofibryllum",
	  ],
	  correct: [2],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: C.",
	},

	{
	  questionKey: "S2-Q17",
	  text: "W obrazie mikroskopowym mięśnia szkieletowego można dostrzec ciemniejsze, grubsze pasma zbudowane z:",
	  options: [
		"miozyny",
		"błonki granicznej",
		"błonki środkowej",
		"aktyny",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q18",
	  text: "Jednostką morfologiczno-czynnościową tkanki kostnej jest:",
	  options: [
		"osteon",
		"chondron",
		"osteoblast",
		"sarkomer",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q19",
	  text: "Trzony kości długich zbudowane są z:",
	  options: [
		"tkanki chrzęstnej sprężystej",
		"tkanki kostnej zbitej",
		"tkanki kostnej gąbczastej",
		"chrząstki włóknistej",
	  ],
	  correct: [1],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: B.",
	},

	{
	  questionKey: "S2-Q20",
	  text: "Powierzchnie stawowe kości zbudowane są z:",
	  options: [
		"chrząstki sprężystej",
		"kości gąbczastej",
		"chrząstki włóknistej",
		"chrząstki szklistej",
	  ],
	  correct: [3],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: D.",
	},

	{
	  questionKey: "S2-Q21",
	  text: "Miofibrylami określamy:",
	  options: [
		"włókna mięśniowe",
		"włókna kurczliwe",
		"aktomiozynę",
		"miocyty",
	  ],
	  correct: [1],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: B.",
	},

	{
	  questionKey: "S2-Q22",
	  text: "Linię przeprowadzoną od szczytu dołu pachowego w dół po pobocznej stronie klatki piersiowej określamy:",
	  options: [
		"linią pachową przednią",
		"linią sutkową",
		"linią pachową ",
		"linią pachową tylną",
	  ],
	  correct: [2],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź C jest częściowo ucięta na zdjęciu; odczytano ją jako „linią pachową środkową”. Odpowiedź zaznaczona na arkuszu: C.",
	},

	{
	  questionKey: "S2-Q23",
	  text: "Pojęciem dwuwymiarowym oznaczającym wycinek powierzchni ciała określamy:",
	  options: [
		"okolicę ciała",
		"płaszczyznę poziomą ciała",
		"część ciała",
		"płaszczyznę strzałkową ciała",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q24",
	  text: "Ruchy obrotowe kręgosłupa zachodzą:",
	  options: [
		"w płaszczyźnie poprzecznej",
		"wokół osi strzałkowej",
		"w płaszczyźnie czołowej",
		"w płaszczyźnie strzałkowej",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},

	{
	  questionKey: "S2-Q25",
	  text: "Ruchy zgięcia bocznego kręgosłupa zachodzą:",
	  options: [
		"wokół osi strzałkowej",
		"wokół osi pionowej",
		"w płaszczyźnie strzałkowej",
		"wokół osi poprzecznej",
	  ],
	  correct: [0],
	  questionType: "single",
	  reviewStatus: "reviewed",
	  reviewNote: "Odpowiedź zaznaczona na arkuszu: A.",
	},
	{
  questionKey: "S3-Q0",
  text: "Na schemacie cyframi: 1, 4, 6 oznaczono:",
  options: [
    "1: aparat Golgiego; 4: mitochondrium; 6: siateczka śródplazmatyczna",
    "1: jądro komórkowe; 4: aparat Golgiego; 6: mitochondrium",
    "1: jądro komórkowe; 4: siateczka śródplazmatyczna; 6: mitochondrium",
    "1: aparat Golgiego; 4: jądro komórkowe; 6: mitochondrium",
  ],
  correct: 1,
  questionType: "image",
  reviewStatus: "reviewed",
  reviewNote: "Poprawna odpowiedź wynika ze schematu: 1 – jądro komórkowe, 4 – aparat Golgiego, 6 – mitochondrium.",
},

{
  questionKey: "S3-Q1",
  text: "Błona białkowo-lipidowa otaczająca komórkę to:",
  options: [
    "chromatyna",
    "tonoplast",
    "plazmalemma",
    "kutykula",
  ],
  correct: 2,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Plazmalemma to błona komórkowa otaczająca komórkę.",
},

{
  questionKey: "S3-Q2",
  text: "Siateczka śródplazmatyczna szorstka odpowiada za:",
  options: [
    "syntezę białek",
    "syntezę cukrów",
    "syntezę lipidów",
    "syntezę celulozy",
  ],
  correct: 0,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Rybosomy związane z RER uczestniczą w syntezie białek.",
},

{
  questionKey: "S3-Q3",
  text: "Model budowy błony komórkowej jako płynnej mozaiki zakłada obecność w błonie dwóch podstawowych składników strukturalnych:",
  options: [
    "sztywnego szkieletu białkowego z mozaikowo rozrzuconymi cząsteczkami fosfolipidów",
    "półpłynnego, podwójnego zrębu lipidowego, w którym mozaikowo zanurzone są białka nieuporządkowanej struktury lipidów i białek",
    "warstwy lipidowej przenikającej się z warstwą białkową",
    "wyłącznie białek i cholesterolu",
  ],
  correct: 1,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "W materiale zaznaczono odpowiedź opisującą płynny, podwójny zrąb lipidowy z mozaikowo zanurzonymi białkami.",
},

{
  questionKey: "S3-Q4",
  text: "Prawidłowe zestawienie organelli komórkowych z pełnionymi przez nie funkcjami to:",
  options: [
    "mitochondrium – synteza lipidów",
    "aparat Golgiego – oddychanie komórkowe",
    "ER gładkie – trawienie substancji",
    "rybosomy – synteza białek",
  ],
  correct: 3,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Rybosomy są miejscem syntezy białek.",
},

{
  questionKey: "S3-Q5",
  text: "Organella obecne w komórkach eukariotycznych o kształcie pęcherzyków, które zawierają liczne enzymy zdolne rozłożyć wchłonięte substancje oraz produkty odpadowe to:",
  options: [
    "sferosomy",
    "rybosomy",
    "lizosomy",
    "glioksysomy",
  ],
  correct: 2,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Lizosomy zawierają enzymy hydrolityczne uczestniczące w trawieniu wewnątrzkomórkowym.",
},

{
  questionKey: "S3-Q6",
  text: "Cząsteczki zbudowane z dwóch podjednostek, mogące tworzyć też układy złożone, są tworami, gdzie odbywa się biosynteza białka. Opisane struktury to:",
  options: [
    "rybosomy",
    "mitochondria",
    "lizosomy",
    "ER",
  ],
  correct: 0,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Rybosomy są zbudowane z dwóch podjednostek i są miejscem biosyntezy białka.",
},

{
  questionKey: "S3-Q7",
  text: "Synteza lipidów w komórce zachodzi w:",
  options: [
    "jądrze komórkowym",
    "aparacie Golgiego",
    "ER szorstkim",
    "ER gładkim",
  ],
  correct: 3,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Synteza lipidów zachodzi głównie w siateczce śródplazmatycznej gładkiej.",
},

{
  questionKey: "S3-Q8",
  text: "Jedną z cech charakterystycznych jąder komórkowych organizmów eukariotycznych jest:",
  options: [
    "występowanie otoczki jądrowej będącej pojedynczą błoną",
    "obecność otoczki jądrowej składającej się z dwóch błon – wewnętrznej i zewnętrznej",
    "brak otoczki jądrowej",
    "występowanie trójwarstwowej otoczki",
  ],
  correct: 1,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Otoczka jądrowa jest strukturą dwubłonową.",
},

{
  questionKey: "S3-Q9",
  text: "W jakich komórkach aparat Golgiego jest najlepiej rozwinięty?",
  options: [
    "tłuszczowych",
    "immunologicznie kompetentnych",
    "wydzielniczych",
    "glejowych",
  ],
  correct: 2,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "W materiale zaznaczono komórki wydzielnicze.",
},

{
  questionKey: "S3-Q10",
  text: "ATP – uniwersalny akumulator i przenośnik energii jest syntetyzowany w:",
  options: [
    "jądrze komórkowym",
    "rybosomach",
    "mitochondrium",
    "aparacie Golgiego",
  ],
  correct: 2,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "W materiale zaznaczono mitochondrium.",
},

{
  questionKey: "S3-Q11",
  text: "Wybierz błędne stwierdzenie dotyczące dyfuzji wspomaganej:",
  options: [
    "polega na transporcie cząsteczek zgodnie z gradientem stężeń",
    "proces ten przebiega przy udziale specjalnych przenośników",
    "tak transportowane jest wiele jonów i substancji odżywczych",
    "wymaga nakładu energii",
  ],
  correct: 3,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Dyfuzja wspomagana jest transportem biernym i nie wymaga nakładu energii ATP.",
},

{
  questionKey: "S3-Q12",
  text: "Komórka może zmieniać kształt oraz poruszać się dzięki obecności:",
  options: [
    "cytoszkieletu",
    "jądra komórkowego",
    "cytoplazmy",
    "mitochondriów",
  ],
  correct: 0,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "W materiale zaznaczono cytoszkielet.",
},

{
  questionKey: "S3-Q13",
  text: "W procesie oddychania komórkowego, jako pierwsze w kolejności, wykorzystywane są:",
  options: [
    "tłuszcze",
    "białka",
    "cukry",
    "aminokwasy",
  ],
  correct: 2,
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "W materiale zaznaczono odpowiedź „cukry”, z dopiskiem „glukoza”.",
},
{
  questionKey: "S4-Q0",
  text: "Wskaż prawidłowy zestaw białek, których obecność w komórkach mięśniowych związana jest ze skurczem:",
  options: [
    "miozyna i kolagen",
    "aktyna i fibronina",
    "miozyna i aktyna",
    "albumina i globulina",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź C.",
},

{
  questionKey: "S4-Q1",
  text: "Wszystkie informacje dotyczące mięśni gładkich są prawdziwe z wyjątkiem:",
  options: [
    "mają wrzecionowaty kształt",
    "cechuje je bardzo duża kurczliwość",
    "jądro jest położone centralnie",
    "budują narządy wewnętrzne np. jelito",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź B.",
},

{
  questionKey: "S4-Q2",
  text: "Podstawową jednostką czynnościową mięśnia jest:",
  options: [
    "filament aktynowy",
    "filament miozynowy",
    "włókno mięśniowe",
    "włókno kurczliwe",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},

{
  questionKey: "S4-Q3",
  text: "Prawdą jest, że:",
  options: [
    "głównym składnikiem filamentów cienkich jest aktyna",
    "w skład filamentów grubych wchodzi białko albumina",
    "głównym składnikiem filamentów cienkich jest miozyna",
    "w skład filamentów grubych wchodzi aktyna",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź A.",
},

{
  questionKey: "S4-Q4",
  text: "Wszystkie informacje dotyczące mięśni poprzecznie prążkowanych są prawdziwe, z wyjątkiem:",
  options: [
    "mają kształt cylindryczny",
    "jądra położone są peryferycznie",
    "posiadają dużą ilość jąder",
    "charakteryzują je powolne skurcze",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},

{
  questionKey: "S4-Q5",
  text: "Włókienko kurczliwe składające się z grubych i cienkich nitek białek kurczliwych to:",
  options: [
    "miofibryla",
    "miofilament",
    "sarkofilament",
    "sarkomer",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź A.",
},

{
  questionKey: "S4-Q7",
  text: "Tkanką zbudowaną z komórek wielojądrowych jest tkanka:",
  options: [
    "mięśniowa gładka",
    "mięśniowa poprzecznie prążkowana",
    "chrzęstna",
    "nabłonkowa",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź B.",
},

{
  questionKey: "S4-Q8",
  text: "Wstawki (dyski interkalarne) występują w tkance:",
  options: [
    "poprzecznie prążkowanej",
    "poprzecznie prążkowanej serca",
    "gładkiej",
    "żadnej z wymienionych",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź B.",
},

{
  questionKey: "S4-Q9",
  text: "Zbudowana jest z włókien mających jedno, rzadko dwa, zwykle centralnie położone, jądro komórkowe (1). Włókna tej tkanki są widlasto rozgałęzione. Opis dotyczy tkanki:",
  options: [
    "poprzecznie prążkowanej",
    "gładkiej",
    "poprzecznie prążkowanej serca",
    "odpowiedzi A i C są poprawne",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź C.",
},
{
  questionKey: "S5-Q2",
  text: "Komórka eukariotyczna to komórka:",
  options: [
    "charakterystyczna dla świata roślin",
    "posiadająca jądro komórkowe",
    "nie posiadająca jądra komórkowego",
    "posiadająca w swojej budowie ścianę komórkową",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź B.",
},

{
  questionKey: "S5-Q3",
  text: "Ścianę komórkową posiadają:",
  options: [
    "żadne prokarionty",
    "komórki zwierzęce",
    "komórki roślinne",
    "wszystkie eukarionty",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu odpowiedź wskazana jest przy C.",
},

{
  questionKey: "S5-Q4",
  text: "Siateczka śródplazmatyczna gładka odpowiada za:",
  options: [
    "produkcję białek",
    "syntezę węglowodanów i tłuszczów",
    "lizę białek, węglowodanów i tłuszczów",
    "produkcję energii",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź B.",
},

{
  questionKey: "S5-Q5",
  text: "Śródbłonek naczyń należy do tkanki:",
  options: [
    "nabłonkowej jednowarstwowej płaskiej",
    "nabłonkowej wielowarstwowej płaskiej",
    "łącznej właściwej",
    "mięśniowej gładkiej",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź A.",
},


{
  questionKey: "S5-Q7",
  text: "Drogi oddechowe wyściela nabłonek:",
  options: [
    "brukowy",
    "cylindryczny migawkowy",
    "jednowarstwowy płaski",
    "przejściowy",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź B.",
},

{
  questionKey: "S5-Q8",
  text: "W obrazie mikroskopowym mięśnia szkieletowego można dostrzec jaśniejsze, cieńsze pasma zbudowane z:",
  options: [
    "miozyny",
    "błonki granicznej",
    "błonki środkowej",
    "aktyny",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},

{
  questionKey: "S5-Q10",
  text: "Mostek jest:",
  options: [
    "kością długą",
    "chrząstką ślizgową",
    "kością różnokształtną",
    "kością płaską",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},

{
  questionKey: "S5-Q11",
  text: "Końce kości długich zbudowane są z:",
  options: [
    "tkanki chrzęstnej sprężystej",
    "tkanki kostnej zbitej",
    "tkanki kostnej gąbczastej",
    "chrząstki włóknistej",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź C.",
},

{
  questionKey: "S5-Q12",
  text: "Główną cechą limfocytów jest:",
  options: [
    "transport tlenu i dwutlenku węgla",
    "udział w krzepnięciu krwi",
    "transport zbędnych metabolitów",
    "wytwarzanie immunoglobulin",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},

{
  questionKey: "S5-Q14",
  text: "Za proces krzepnięcia krwi odpowiadają:",
  options: [
    "surowica",
    "czerwone krwinki",
    "szpik kostny",
    "płytki krwi",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},

{
  questionKey: "S5-Q15",
  text: "Grupa AB:",
  options: [
    "nie zawiera żadnych antygenów, zawiera przeciwciała A i B",
    "zawiera antygeny A i B, nie zawiera przeciwciał",
    "zawiera przeciwciała A i B oraz zawiera antygeny A i B",
    "nie zawiera żadnych przeciwciał, ani żadnych antygenów",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź B.",
},

{
  questionKey: "S5-Q17",
  text: "Krew człowieka zawiera erytrocyty w liczbie około:",
  options: [
    "4-6 mln./1cm3 krwi",
    "6-10 tysięcy/1cm3 krwi",
    "300-400 tys./1cm3 krwi",
    "2,5-3 mln./1cm3 krwi",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź A.",
},

{
  questionKey: "S5-Q18",
  text: "Ruchy zginania w stawie łokciowym zachodzą:",
  options: [
    "wokół osi pionowej",
    "w płaszczyźnie czołowej",
    "w płaszczyźnie czołowej",
    "wokół osi poziomej",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},

{
  questionKey: "S5-Q20",
  text: "Tkanką, której komórki wydzielają duże ilości substancji międzykomórkowej, jest tkanka:",
  options: [
    "nerwowa",
    "mięśniowa",
    "łączna",
    "nabłonkowa",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź C.",
},

{
  questionKey: "S5-Q22",
  text: "Paliczki palców należą do kości:",
  options: [
    "płaskich",
    "różnokształtnych",
    "długich",
    "krótkich",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź C.",
},

{
  questionKey: "S5-Q23",
  text: "Wszystkie informacje dotyczące mięśni poprzecznie prążkowanych są prawdziwe, z wyjątkiem:",
  options: [
    "mają kształt cylindryczny",
    "jądra położone są peryferycznie",
    "posiadają dużą ilość jąder",
    "charakteryzują je powolne skurcze",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "Na arkuszu zaznaczona jest odpowiedź D.",
},
{
  questionKey: "S6-Q00",
  text: "Podściółka tłuszczowa człowieka jest rodzajem tkanki:",
  options: [
    "nabłonkowej",
    "łącznej",
    "mięśniowej",
    "nerwowej",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q01",
  text: "Prawdą jest, że tkanka łączna:",
  options: [
    "jest najmniej zróżnicowaną spośród wszystkich tkanek człowieka",
    "pełni wyłącznie funkcje obronne",
    "składa się z istoty międzykomórkowej i osadzonych w niej komórek",
    "występuje tylko w okresie zarodkowym i płodowym człowieka",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q02",
  text: "Najważniejszą cechą tych włókien jest ogromna odporność na rozrywanie, stąd występują m.in. w ścięgnach, kościach i chrząstkach. Mowa jest o włóknach:",
  options: [
    "kolagenowych",
    "retikulinowych",
    "sprężystych",
    "elastycznych",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q03",
  text: "Do tkanki łącznej właściwej nie należy tkanka:",
  options: [
    "wiotka",
    "chrzęstna",
    "zbita",
    "siateczkowata",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q04",
  text: "Ścięgna i więzadła są utworzone z tkanki:",
  options: [
    "chrzęstnej szklistej",
    "kostnej",
    "łącznej siateczkowatej",
    "łącznej zbitej",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q05",
  text: "Komórki chrzęstne to inaczej:",
  options: [
    "chondrocyty",
    "osteocyty",
    "chondroblasty",
    "osteoblasty",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q06",
  text: "Tkanka kostna należy do tkanki:",
  options: [
    "łącznej oporowej",
    "łącznej zbitej",
    "łącznej właściwej",
    "łącznej siateczkowatej",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q07",
  text: "Jaki typ chrząstki buduje powierzchnie stawowe oraz chrzęstne części nosa, nagłośni i oskrzeli?",
  options: [
    "chrząstka sprężysta",
    "chrząstka włóknista",
    "chrząstka szklista",
    "chrząstka siateczkowata",
  ],
  correct: [2],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q08",
  text: "Nieprawdą jest, że:",
  options: [
    "limfa pełni funkcje odpornościowe",
    "limfa to inaczej chłonka",
    "składa się z osocza oraz elementów morfotycznych",
    "elementy morfotyczne limfy reprezentowane są głównie przez erytrocyty",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q09",
  text: "Poniższe rysunki przedstawiają różne rodzaje tkanki łącznej podporowej. Poprawną kolejność podpisów podaje zestaw:",
  options: [
    "1 - tkanka kostna zbita, 2 - tkanka chrzęstna, 3 - tkanka kostna gąbczasta",
    "1 - tkanka chrzęstna, 2 - tkanka kostna gąbczasta, 3 - tkanka kostna zbita",
    "1 - tkanka chrzęstna, 2 - tkanka kostna zbita, 3 - tkanka kostna gąbczasta",
    "1 - tkanka kostna gąbczasta, 2 - tkanka kostna zbita, 3 - tkanka chrzęstna",
  ],
  correct: [2],
  questionType: "image",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q10",
  text: "Substancja międzykomórkowa złożona z włókien tworzących blaszki i zawierających duże ilości soli mineralnych, które nadają twardość i wytrzymałość na obciążenia mechaniczne wchodzi w skład tkanki:",
  options: [
    "nabłonkowej",
    "kostnej",
    "łącznej właściwej",
    "chrzęstnej",
  ],
  correct: [1],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q11",
  text: "Osteoklasty to:",
  options: [
    "komórki kościogubne",
    "komórki kościotwórcze",
    "komórki chrząstkogubne",
    "komórki chrząstkotwórcze",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q12",
  text: "Tkanka ta zawiera niewielką ilość substancji międzykomórkowej, w której przeważają włókna sprężyste utworzone z białka elastyny. Tkanka ta nie ulega kostnieniu i występuje m.in. w małżowinie usznej. Informacja dotyczy tkanki:",
  options: [
    "kostnej sprężystej",
    "chrzęstnej szklistej",
    "chrzęstnej włóknistej",
    "chrzęstnej sprężystej",
  ],
  correct: [3],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q13",
  text: "Tkanka ta tworzy szkielet człowieka w okresie zarodkowym i płodowym? Mowa o tkance:",
  options: [
    "chrzęstnej szklistej",
    "chrzęstnej włóknistej",
    "chrzęstnej sprężystej",
    "łącznej zarodkowej",
  ],
  correct: [0],
  questionType: "single",
  reviewStatus: "reviewed",
  reviewNote: "",
},

{
  questionKey: "S6-Q14",
  text: "Na rysunku cyfrą 2 oznaczono:",
  options: [
    "osteon",
    "kanał Haversa",
    "blaszkę kostną",
    "beleczkę kostną",
  ],
  correct: [2],
  questionType: "image",
  reviewStatus: "reviewed",
  reviewNote: "",
}
];

const images = [
  {
    path: "/images/questions/S1-Q07-neuron.png",
    alt: "Schemat neuronu – pytanie S1-Q07",
    questionKey: "S1-Q7",
    sortOrder: 0,
  },
  {
    path: "/images/questions/S1-Q09-synapse.png",
    alt: "Schemat synapsy – pytanie S1-Q09",
    questionKey: "S1-Q9",
    sortOrder: 0,
  },
  {
    path: "/images/questions/S1-Q10-epithelium.png",
    alt: "Schemat nabłonka – pytanie S1-Q10",
    questionKey: "S1-Q10",
    sortOrder: 0,
  },
  {
  path: "/images/questions/S3-Q0-cell.png",
  alt: "Schemat komórki eukariotycznej – pytanie S3-Q0",
  questionKey: "S3-Q0",
  sortOrder: 0,
  },
  {
  path: "/images/questions/S6-Q09-connective-supporting.png",
  alt: "Rysunki przedstawiające różne rodzaje tkanki łącznej podporowej",
  questionKey: "S6-Q09",
  sortOrder: 0,
},
{
  path: "/images/questions/S6-Q14-osteon.png",
  alt: "Schemat osteonu z oznaczeniem struktur tkanki kostnej",
  questionKey: "S6-Q14",
  sortOrder: 0,
}
];

async function main() {
  console.log("🌱 Rozpoczynam seed Zestawu 1...");

  const testSet = await prisma.testSet.upsert({
    where: { number: 1 },
    update: {
      name: "Zestaw 1",
    },
    create: {
      number: 1,
      name: "Zestaw 1",
    },
  });

  for (const q of questions) {
    const question = await prisma.question.upsert({
      where: {
        questionKey: q.questionKey,
      },
      update: {
        text: q.text,
        options: q.options,
        correct: q.correct,
        questionType: q.questionType,
        reviewStatus: q.reviewStatus,
        reviewNote: q.reviewNote,
      },
      create: {
        questionKey: q.questionKey,
        text: q.text,
        options: q.options,
        correct: q.correct,
        questionType: q.questionType,
        reviewStatus: q.reviewStatus,
        reviewNote: q.reviewNote,
      },
    });

    await prisma.questionSet.upsert({
      where: {
        questionId_setId: {
          questionId: question.id,
          setId: testSet.id,
        },
      },
      update: {},
      create: {
        questionId: question.id,
        setId: testSet.id,
      },
    });
  }

  for (const img of images) {
    const question = await prisma.question.findUnique({
      where: {
        questionKey: img.questionKey,
      },
    });

    if (!question) {
      throw new Error(
        `Nie znaleziono pytania ${img.questionKey} dla obrazka ${img.path}`,
      );
    }

    const image = await prisma.image.upsert({
      where: {
        path: img.path,
      },
      update: {
        alt: img.alt,
      },
      create: {
        path: img.path,
        alt: img.alt,
      },
    });

    await prisma.questionImage.upsert({
      where: {
        questionId_imageId: {
          questionId: question.id,
          imageId: image.id,
        },
      },
      update: {
        sortOrder: img.sortOrder,
      },
      create: {
        questionId: question.id,
        imageId: image.id,
        sortOrder: img.sortOrder,
      },
    });
  }

  console.log(`✅ Zestaw 1: ${questions.length} pytań zapisanych.`);
  console.log(`🖼️ Obrazki: ${images.length} zapisane.`);
  console.log("🎉 Seed zakończony pomyślnie.");
}

main()
  .catch((error) => {
    console.error("❌ Błąd podczas seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
