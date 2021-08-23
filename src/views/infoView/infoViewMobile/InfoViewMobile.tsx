import { DefaultHeaderMobile } from '../../../shared/components/defaultHeader/defaultHeaderMobile/DefaultHeaderMobile'
import './InfoViewMobile.css'
import InfoViewData from '../data/InfoViewData'
import { InfoWrapper } from '../components/InfoWrapper'

export const InfoViewMobile = () => {

  return (
    <div className="info-view-mobile-wrapper">
      <DefaultHeaderMobile title={InfoViewData.title} bgImg={InfoViewData.bgImg} />
      <div className="margin-2rem-auto">

        {/* POLICY & REGLER */}
        <div className="info-view-info-wrapper">
          <h3>policy &#38; regler</h3>
          <p>Policy/regler gäller för Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School (”klubben”), i dess lokaler och i samband med representationsaktiviteter för Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School som tävlingar, träningar, uppvisningar i annan lokal nationellt som internationellt.</p>
          <p> Varje medlem skall ges tillfälle att få denna policy presenterad, i skriftlig eller muntlig form.Varje medlem skall följa denna klubbpolicy, eventuellt avsteg från klubbpolicy kan innebära uteslutande ur klubben, vilket beslutas av klubbens ledning. Vid eventuellt uteslutande sker ingen återbetalning av terminsavgift. Frånvaro efter kursstart berättigar inte till återbetalning av kursavgiften. Om du på grund av sjukdom ej har möjlighet att fullfölja kursen och styrker detta med läkarintyg återbetalar vi kursavgiften för den tid läkarintyget avser. Varje medlem skall också verka för att policyn följs.</p>
        </div>

        <div className="line-divider-mobile"></div>

        {/* VÄRDERINGAR */}
        <div className="info-view-info-wrapper">
          <h3>värderingar</h3>
          <p>Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School skall kännetecknas av följande värderingar:</p>
          <p>• Respekt för varandra</p>
          <p>• Respekt för dojo-regler</p>
          <p>• Ödmjukhet</p>
          <p>• Glädje i att utöva BJJ som NO Gi &#38; SW</p>
          <p>• Alla ska känna sig välkomna</p>
        </div>

        <div className="line-divider-mobile"></div>

        {/* TÄVLING */}
        <div className="info-view-info-wrapper">
          <h3>tävling</h3>
          <p>Som betalande medlem i Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School har man möjlighet att tävla i klubbens namn i följande stilar: BJJ, NOGI &#38; SW. Att tävla för en annan klubb när man är betalande medlem hos Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School är ej tillåtet (brott mot denna regel leder till uteslutning ur klubben och ingen återbetalning av terminsavgift).</p>
          <p>Vi lägger stor vikt vid att man har ett gott uppträdande när man representerar klubben vid tävling läger och andra event gentemot: andra deltagare, funktionärer, tränare, ledare och lokal. Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School föregår med gott exempel och visar hjälpsamhet.</p>
        </div>

        <div className="line-divider-mobile"></div>

        {/* DROGER ALKOHOL DOPING */}
        <div className="info-view-info-wrapper">
          <h3>droger, alkohol &#38; doping</h3>
          <p>Enligt svensk lag gäller 18 år som förtäring av alkohol. Alkohol är en drog och därför förekommer den inte i Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School ordinarie verksamhet. Där verksamhet riktar sig mot barn och ungdomar under 18 år gäller total avhållsamhet från alkohol.</p>
          <p>Narkotika, och liknande preparat, är förbjudet enligt lag och det gäller även inom Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School verksamhet.</p>
          <p>Dopningspreparat är ett otillåtet medel och får inte förekomma i någon form inom Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School verksamhet.</p>
        </div>

        <div className="line-divider-mobile"></div>

        {/* MEDLEMSREGLER */}
        <div className="info-view-info-wrapper">
          <h3>medlemsregler</h3>
          <p>Det finns ett antal regler kopplat till utövandet våra stilar. Det finns regler om medlemsavgifter, uppföranderegler, regler kopplade till kast och träning samt tävlingsregler.
            De lokala uppföranderegler som Torslanda Kampsportcenter – Yogui Brazilian Jiu-Jitsu School är följande:</p>

          <p>• Alla är välkomna att prova-på ett pass innan man tecknar – helt gratis.</p>
          <p>• Efter prova-på så betalar man snarast in terminsavgiften och köper träningsutrustning som krävs för att träna. Torslanda Kampsportcenter – Yogui Brazipan Jiu-Jitsu School   kan hjälpa till med det.</p>
          <p>• Vid utebliven terminsavgift och en påminnelse äger man ej rätt längre att träna tills den blivit betald till fullo.</p>
          <p>• Du skall alltid hälsa (buga) när Du går in eller ut ur dojon (träningslokalen).</p>
          <p>• Du skall även hälsa på Din träningspartner före och efter träningen.</p>
          <p>• Lämna aldrig dojon utan att meddela instruktören om orsaken.</p>
          <p>• Du skall vara uppmärksam på det instruktören visar och säger.</p>
          <p>• Du skall bara träna det instruktören visar.</p>
          <p>• Du skall inte göra motstånd och hålla emot när Din träningspartner skall öva in en teknik.</p>
          <p>• Du skall hjälpa till så att Din träningspartner lär sig så bra som möjligt.</p>
          <p>• Du skall aldrig prova någon svår teknik på en som är mindre skicklig än Du själv.</p>
          <p>• Du skall aldrig försöka göra tekniker som är för avancerade för Ditt kunnande. Instruktören avgör när Du är mogen.</p>
          <p>• Du skall respektera Din träningspartners signal om att ge upp (avklappning). Släpp omedelbart Ditt grepp.</p>
          <p>• Dina finger- och tånaglar skall vara rena och kortklippta.</p>
          <p>• Du skall ha en hel och ren gi (träningsdräkt) och vara ren själv.</p>
          <p>• Du skall aldrig lära ut eller demonstrera tekniker på annan plats än i dojon.</p>
          <p>• Alla hjälper till att hålla rent i lokalen.</p>
        </div>

        <div className="line-divider-mobile"></div>

        {/* SOCIALA MEDIER */}
        <div className="info-view-info-wrapper">
          <h3>sociala medier</h3>
          <p>Bilder och video tagna under träning, läger eller vid annat tillfälle kan komma att publiceras på våra hemsidor, sociala medier eller i lokal press. I lokalen finns även övervakningskamera för ökad säkerhet.</p>
        </div>
      </div>
    </div>
  )
}
