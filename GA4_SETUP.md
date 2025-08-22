# Google Analytics 4 - Návod na nastavení

## Co už je hotové v kódu:
✅ GA4 tracking script je přidaný v `index.html`
✅ Event tracking je implementovaný pro:
   - Kliknutí na "Chci se přihlásit" (navbar a hero sekce)
   - Kliknutí na email odkazy
   - FAQ interakce

## Co musíš udělat ty:

### 1. Vytvoř Google Analytics 4 účet:
1. Jdi na https://analytics.google.com
2. Klikni na "Start measuring" nebo "Vytvořit účet"
3. Vytvoř nový účet (Account) - například "Conference 2025"
4. Vytvoř Property (nemovitost) - například "Masterclass komunikačních dovedností"
5. Vyber:
   - Industry category: Business & Industrial Markets
   - Business size: Small
   - Jak chceš používat GA: Measure content engagement, Examine user behavior

### 2. Získej Measurement ID:
1. Po vytvoření property uvidíš Measurement ID ve formátu `G-XXXXXXXXXX`
2. Nebo ho najdeš v: Admin → Data Streams → Web → tvůj stream

### 3. Vlož Measurement ID do kódu:
1. Otevři soubor `index.html`
2. Nahraď `G-XXXXXXXXXX` svým skutečným Measurement ID na řádcích 10 a 15:
   ```javascript
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-TVOJE_ID"></script>
   ...
   gtag('config', 'G-TVOJE_ID');
   ```

### 4. Deploy na Vercel:
```bash
git add .
git commit -m "Add Google Analytics tracking"
git push
```

### 5. Ověř, že to funguje:
1. Jdi na svůj web
2. V Google Analytics otevři: Reports → Realtime
3. Měl bys vidět svou návštěvu
4. Zkus kliknout na "Chci se přihlásit" - měl by se zobrazit event

## Co sledujeme:
- **Návštěvnost**: počet návštěvníků, odkud přišli, jaké zařízení používají
- **registration_click**: kliknutí na tlačítka registrace (kde na stránce)
- **contact_click**: kliknutí na emailové odkazy
- **Scroll depth**: jak hluboko uživatelé scrollují (GA4 automaticky)
- **Engagement time**: jak dlouho jsou na stránce (GA4 automaticky)

## Tipy:
- V GA4 si nastav Goals/Conversions pro "registration_click" event
- Propoj GA4 s Google Search Console pro SEO data
- Nastav si týdenní email report

## Ochrana soukromí:
- GA4 automaticky anonymizuje IP adresy
- Cookie banner není nutný, pokud nesbíráš osobní údaje
- Ale můžeš přidat jednoduchý info banner pro transparentnost