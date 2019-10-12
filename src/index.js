import React from "react";
import ReactDOM from "react-dom";
import Notifications, { notify } from "react-notify-toast";
import "./index.css";
import block from "./tekatekikota-gif-transparent.gif";
import Main from "./main.js";
import Prompt from "./prompt";

export default class ScavengerHunt extends React.Component {
    constructor() {
        super();
        this.prompts = [
            "My grandfather only left me this phrase:\n\nGo to where everything started. \nOur history. Our Blood. Our Family. \nIt is between the north and west.\nThe entrance to Batavia as the Batavian called.\nThe answer will open the portal of the past.\nAnd from there you shall pass through. \nFind my name. \n\nHe told me the answer lies inside this building. \nLets get around to find it.\n\n(4 letters)",
            "BEOS is the abbreviation of Bataviasche Ooster Spoorweg Maatschappij (The Batavian Eastern Railway Company), nickname the local used for this station. This station was first built in 1887. It went through a rebuilt and re-opened in 1929, designed by the architect F.J.L. Ghijsels, a Dutch-born architect. The inaugural event conducted on a large scale by planting buffalo head by Governor General A.C.D. de Graeff.\n\nThis station was also known as Het Indische Bouwen expression that is a combination of structural western and modern techniques combined with traditional forms of local people and art deco dressing. In accordance with ancient Greek philosophy, simplicity is the shortest way to beauty.\n\n***\n\nThe beauty lays in this building.\n\nLook above and find the half moon,\ntimeless silvery-gray,\ncount the blessing.\n\nTally up with the number of lanes,\nspread in front of you,\nlay on the ground.\n\nFill in the number code below to continue.\n\n(2 digits)",
            "8+12 = 20. Jakarta Kota Station has 8 half-rounded steel structures and 12 train tracks. Nowadays managed by KRL Commuter Line under Indonesian Railway Company, Jakarta Kota Station flourished as one of the main stations for commuter rail system that connect suburban areas such as Depok, Bogor, and Bekasi to the center of Jakarta. Bringing the middle-class suburban worker to the city every single day.\n\n***\n\nThe day is almost over,\ngo get in touch with the sunlight.\nHeadto the Arctic gate,\nwalk ahead till you find the big square.\n\nWhen you're there,\nstand in the center.\nLook ahead to the north,\nand find another lane,\nburied down below.\nForgotten from the past.\nStreetcar named Despair.\nFind my name\n\n(4 letters)",
            "Tram line has a history in Batavia that dates back to 1869. Horses brought from Sumba, Timor, Sumbawa, Tapanuli, and Priangan, were used to pull 40 persons capacity tram. Since the electricity came it went through its victorious era.\n\nBut after a lot of war and colonizer changing, in the 50’s the tram line suffers. There was a change of mindset between the Batavians back at those times, who didn’t want to pay for transportation because they were already ‘free’. An accident between a tram and other vehicles became one the biggest reason for its downfall. By a famous columnist in 1951, Tjalie Robinson, it was called “Streetcar in Despair”. 1962 was the end of the tram line.\n\n***\n\nTram line brought me here.\nEx Me Ipsa Renata Sum.\nI was made out of myself.\nI am the thumb in between index and middle finger.\nWhat a strong name, they called me with.\nYou should not forget, that I am.\n\n(5 letters)",
            "Si Jagur was a big cannon, made out of 14 cannons melted and cast into one. It was bought and placed in the Batavia castle as the part of city defense. When the Portuguese colonized Indonesia, although they believed in religion, they still believe in superstitions. That when you go out at night, you have to cover every hole on your body to avoid bad spirits coming inside your body, even in between your finger.\n\nThe gesture in putting the thumb in between the index and middle finger is called “Fico” in Portuguese, which means good luck. Until now in some parts of Latin America and Portuguese, they still use this gesture.\n\nCannons were put around Batavia, there are another four around the square. Do you see it?\n\n***\n\nFour is Square.\nSquare is Four.\n\nFour times Two.\nFind the Eight.\n\nThe Spring of Acqua.\n\nI was destroyed.\nBut they pulled my remains. \nTell me when,\nAnd I’ll let you inside the secret chamber.\n\n(4 digits)",
            "This fountain is a replica of the real one dated back to 1743. It was then built to start the piped water supply system in Batavia. People, mostly slaves, would walk here with buckets or barrels for water supply. This piped water system was established to find new water spring from the already dirty and unhealthy canal water. This water spring was abandoned back in 1830-1840. And excavated in the 70s. It was abandoned in favor of water supply from wells.\n\n***\n\nDeep down wells.\nDeep down tunnels.\nSnakes hidden under.\n\nFrom me you can see the big square.\nMy dome stands tall.\nAs the eye of the governor.\nWill you find me?\n\nOpen your envelope,\nto guide you to another portal in the past.\nWhat is my name written on it?\n\n(3 words, 24 letters)",
            "This building is called The Fatahillah Museum, or with the official name is also called The History Museum of Jakarta. Build around 1707-1712, this building is the town hall of Batavia. This building also served as the city council and as the court of law. During the years and under different regimes, the building changes its purposes from time to time, before it becomes the building you see in front of you today.\n\nThe museum was temporarily closed in July 2011 for conservation. Conservation activities conducted with aid from the Dutch government were carried out starting in 2012 and the renovation was completed in February 2015. A new conservation room was added during the renovation, displaying the vision and mission of JOTR (Jakarta Old Town Reborn) for the future of Old Batavia.\n\n***\n\nThe mystery of Old Batavia.\nAs my chamber open,\nI find new secrets,\nhidden in the midst of mural.\nAsk the guard where.\n\nI was there in the fresco.\nFind me in the party.\nAs I hold the key of what you seek.\nI am embellished in my ancestor’s attire,\ngleaming black and Gold.\nMy traditional hat and mustache humbled me.\n\nHave you found me?\nAnd what is it that I hold?\n\n(5 letters)",
            "This fresco was an unfinished one by Indonesian realist painter Harijadi Sumodidjojo before he passed away. In the early ’70s, the UN suggested Jakarta Governor’s back then Ali Sadikin to revitalized the old city area for tourism. He then asked Harijadi to draw in 20 m2 canvas, but he drew in the 200 m2 wall instead. The picture depicts the life in Batavia around 1980-1920. Interactions of culture and ethnicity around that age.\n\nIn 2010, this fresco is rediscovered unintentionally inside a forgotten room in this building by the UK and Indonesian artists as they worked together to interpret the fresco into an interactive show in the museum.\n\n***\n\nTobacco. Cloves. Nutmeg.\nThey came here for all.\nThey build colony here.\nThey build fortress here.\n\nCome and find the map of the old Batavia.\n\nFrom above the cloud you can see.\nThe place where you need to go to next.\nIn the letter L, you will find it.\n\nThis is where he was buried.\nHe who led the pack.\nWrite and remember this place and its story.\nYou will need it soon.\n\n(9 letters)",
            "The New Church or Nieuwkerk was Jan Pieterszoon Coen’s funeral site. The founder of Batavia and the Governor-General of the Dutch East Indies, who colonized Batavia back in the days. You can find the miniature in this museum. Have you seen it? It was built on the site of a church which was built in 1640, under the name of the Old Dutch Church.\n\nThe building was built not by a professional architect. Instead, this grand building was designed and built by a baker. No wonder it was damaged when an earthquake hit Batavia on July 22, 1739. Nevertheless, it was still functioned as a church until demolished in 1808. After the demolition, they build a new building replacing it, which is now used as a puppet museum called The Wayang Museum.\n\n***\n\nMuseum full of forgotten maps.\nBut I am different.\nA puzzling map,\nfound deep down in the village.\nThe city looks like snakes,\nlurking around me.\n\nFollow the path and you will find me.\nWhere was I found?\n\n(5 letters)",
            "Ciéla map was first found by a Dutch controller in 1858 in Ciela Village, Panembangan Garut, West Java. K.F. Halle, the administrator of Cikajang tea plantation made a copy of the map in 1862. Inside the map was the name of places, mountains, and rivers in West Java were written. According to Halle, at the time, the map was at least already 300 years old, so it is possibly originated from the 16th-century.\n\nThe original map was said to be lost during the restoration of this museum. The one in display right now is a replica, and also a puzzle board visitor can play with. Can you find Batavia City on the map?\n\n***\n\nCome up!\nTrace the stairs.\nAttend the municipal assembly,\nand join the round table conference.\nLook around.\n\nCan you feel it?\nYou are inside me.\nBut there are two of me.\nSimilar but not the same.\nFind my twin.\n11,333 km away from each other. \n\nWhat is my twin?\n\n(2 words, 17 letters)",
            "Stadhuis Amsterdam or Palais op de Dam is the twin building of Fatahillah Museum. Fatahillah Museum was modeled after the one in Amsterdam and both were built in the same century. Similarities including the domed cupola crowning the structure and a proportion typical of 17th-century Dutch city hall.\n\nOn 27 December 1949, Stadhuis Amsterdam was the scene of the official ceremony for the transfer of sovereignty over Indonesia by the Netherlands, represented by Queen Juliana and Indonesian vice-president Muhammad Hatta.\n\n***\n\nTwins.\nSo many twin chairs,\nneighboring cupboards.\nBut there is only one peculiar room screen.\n\nOn there, where the city's emblem lays.\nIn the array of flags.\nAlways in the middle.\nI stand tall, upright, facing the sky.\nIn the past and present, I look alike.\n\nWhat am I?\n\n(5 letters)",
            "The colonial arms are the oldest heraldic arms ever granted in Asia. On August 15, 1620, Jan Pietersz. Coen, Governor General of the Dutch East India Company (VOC), decreed the use of a seal for the new city of Batavia on which the arms of the city were to be placed. The Colonial Arms of Batavia was described as an orange shield with a blue sword surrounded by a brown laurel wreath. If you see Jakarta’s city symbol right now, with the national monument, the graphic is similar to it.\n\n***\n\nCome down now.\nThrough the inner court.\nThe dark curvatured rooms,\nlocks and bars\n\nMany begone.\nWaiting for days.\nWaiting for air.\nWaiting for sun.\n\nSad Stories.\nBad Stories.\nYou can hear cries in the walls.\n\nWhat did you find inside it?\n\n(2 words, 11 letters)",
            "There are five underground prisons inside Fatahillah Museum. Semicircular chambers, stuffy, and dark. Prison walls are made of concrete wall with iron bars on the front windows. These prisons were used to keep the prisoners before facing the court or punishment. But a lot of them died, even before the court ruling, due to the condition of the prison that has no proper ventilation and overcapacity. Many died for cholera, suffocation, and a lot of other sicknesses as well.\n\nSome of the Indonesian heroes were also prisoners in here, such as Cut Nyak Dien and Pangeran Diponegoro. But due to their high status, they were not jailed in the underground, rather in a special room inside this museum.\n\n***\n\nDo you still remember,\nof the letter L a while ago.\nHead to the exit,\nand find the traces you've discovered before.\nWhere the new one replaced,\nand where the puppets hanged.\n\nWhen you know where it is.\nCome to the front of the building.\nFace the truth.\nEmbellished in front of you.\nWrite my name again.\n\n(2 words, 12 letters)",
            "The Wayang Museum is a museum dedicated to Indonesian puppetry. The museum building occupies the site of a church which was built in 1640, under the name of the Old Dutch Church. In 1732, the church was renovated and the name was changed into the New Dutch Church (Nieuwkerk).\n\nThe museum has a collection of various kinds of puppets all across Indonesia, such as Javanese, Sundanese, Sumatrans, as well as puppets from other countries as well. Puppet theater and a workshop of puppet making are periodically organized in the museum.\n\n***\n\nNow look to the right, walk.\nTurn the first left,\nand walk the alley straight.\nLook right till you find,\na man with a white bucket.\n\nWhat am I doing?\n(8 letters)",
            "This statue and all the other statues around this river are made by Dolorosa Sinaga and her team. This statue alone, a construction painter, was created to capture the spirit of the revitalization of the old town area.\n\nThere was a debate happening about the revitalization of this place. Between preserving it like the old days or making it modern and new. Kali Krukut riverside, where you are standing right now is an example of making it modern. The design was similar to the Cheonggyecheon river in South Korea. Which way do you think is better?\n\n***\n\nWith the painter on your left.\nWalk across the river.\nAnd then walk across the road.\n\nLook on your left.\nCarved figures are lining up.\nIn the facade of the creepy palace.\nNear to it you will find,\na numbered white structure.\n\nWhat is my number?\n\n(4 digits)",
            "Another name for this building was Athena Discotheque. This building was built between 1925-1927, hence the name. It has two floors, previously used as a Disco Place in the front and office area in the back.\n\nThe architects were duo Reyerse and W. Selle. Using Art Deco style, this building has wide white-colored facades with plenty of vertical windows on the first floor and plenty of ventilation blocks on the second floor. The ventilation blocks functioned as air circulation but only applied on top and low part of the wall to avoid sunlight overexposure.\n\n***\n\nThe sunlight shines through the white facade,\nin this side of the old street.\nBut there is only one that immune to the light.\nAs it tries to stand through,\nand time try to withers.\nOn it you will see.\nThe blood I shed with me.\n\nWhat is it?\n\n(2 words, 9 letters)",
            "Toko Merah was built in 1730 as the residence of the Governor General of the Dutch East Indies. From 1743 to 1755, the building served as a Navy Academy, reputed to be the oldest navy academy in Asia. The building was converted into a hotel from 1786 to 1808. In 1851, the building was purchased by Oey Liauw Kong, Kapitein der Chinezen of Batavia, for use as his residence and shop, and was painted red, and so it was known as Toko Merah (Red Shop).\n\nToko Merah was the silent witness of the Angke Raid back in the Colonial era. Where the Dutch kill the Chinese population of Batavia in fear of domination and criminality. The river in front of the building was red by blood, it was where they threw all the bodies. Up till now, there are stories on how haunted the building is, where they hear footsteps and people talking inside at night times.\n\n***\n\nCome across the road.\nSay hi to the old man,\nreading on the red bench.\nSit next to him.\nTalk to him.\nDo you hear him answering?\n\nNow walk across the river.\nthrough the bridge.\nStop at the end of it.\nLook around.\n\nFind the building above a building\nA beautiful burgundy cupola.\nThe tallest of them all.\n\nWhat is the color of the roof in the picture?\n\n(6 letters)",
            "This is Jasa Raharja office building. It is built around the 19th-century. Before it was revitalized, this building was almost collapse, the roof was gone, and had no function, only there were remnants of walls that were empty behind. Once conserved, this building is the same as the old building in terms of facades, while using more modern building technology inside. The pretty shape cloister dome and mosaic of a building on the front top facade wall are the main element which they tried to preserve. One of the prettiest building in this area.\n\n***\n\nI thank for your bravery.\nAs you journey to find the treasure is much near,\ncome follow the mortar and the pestle.\nNot far from where you are now,\nyou will find one.\n\nStep inside,\nthrough the hallway,\nyou will find another one.\n\nBefore you open the door,\nYou will need a code,\nwritten on the windows.\nInside keeper will wait.\nand give you what you seek.\n\n(4 letters)",
            "Since long time ago, the word jamu was believed to be an acronym for two ancient Javanese words, namely: djampi and oesodo. Djampi is interpreted as a mantra or prayers delivered through a certain medium, while oesodo means treatment or health. Based on the two meanings of the word, etymologically herbal medicine can be interpreted as an expectation of health that is prayed for through a certain medium.\n\nJamu is believed to cure diseases. But herbal medicine has a function and meaning that is actually more than that. The concoction of herbal medicine from various plant materials has a rich taste and interesting historical, philosophical, and aesthetic values to be explored and preserved."
        ];
        this.answers = [
            "beos",
            "20",
            "trem",
            "jagur",
            "1972",
            "museum kesejarahan jakarta",
            "cigar",
            "nieuwkerk",
            "ciela",
            "stadhuis amsterdam",
            "sword",
            "cannon balls",
            "museum wayang",
            "painting",
            "1927",
            "toko merah",
            "yellow",
            "jamu"
        ];
        this.maxSteps = 17;
        this.currGuess = "";
        this.state = {
            currStep: 0
        };
    }

    checkAnswer() {
        var fmtGuess = this.currGuess.trim().toLowerCase();
        if (fmtGuess === this.answers[this.state.currStep]) {
            notify.show("Correct Answer!", "success", 3000);
            this.setState({ currStep: this.state.currStep + 1 });
            var inputBar = document.getElementsByClassName("submitBar");
            if (inputBar !== undefined && inputBar.length > 0) {
                inputBar[0].value = "";
            }
        } else {
            notify.show("That is not the correct answer", "error", 3000);
        }
    }

    updateGuess(guess) {
        this.currGuess = guess.target.value;
    }

    handleSubmit(evt) {
        if (evt.keyCode === 13) {
            this.checkAnswer();
        }
    }

    renderSubmitBar() {
        if (this.state.currStep <= this.maxSteps) {
            return (
                <div id="submitContainer">
                    <input
                        className="submitBar"
                        onKeyDown={evt => this.handleSubmit(evt)}
                        onChange={evt => this.updateGuess(evt)}
                    />
                    <span>
                        <button
                            className="submitBtn"
                            onClick={() => this.checkAnswer()}
                        >
                            Submit
                        </button>
                    </span>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="scavengerHuntContainer">
                <Notifications options={{ id: "notifStyle" }} />
                <img src={block} alt="tekatekikota" id="imgGame" />
                <div className="promptsContainer">
                    <Prompt
                        step={this.state.currStep}
                        instructions={this.prompts[this.state.currStep]}
                        shouldShowLink={this.state.currStep === 18}
                    />
                    {this.renderSubmitBar()}
                </div>
            </div>
        );
    }
}
// ========================================

ReactDOM.render(<Main />, document.getElementById("root"));
