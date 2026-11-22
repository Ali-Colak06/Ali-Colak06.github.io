# Ali Çolak Portfolio — Content

## 1. Document purpose

This document is the source of truth for the **actual written content planned for the public portfolio**.

It contains approved copy/content, not implementation details.

Do not use this document to decide:

- technical architecture,
- Sanity schema,
- routing implementation,
- CSS/layout measurements,
- deployment behavior.

Those belong in the other source-of-truth documents.

Important rules:

- Preserve the approved English and Turkish wording below.
- Do not silently rewrite, polish, translate, or “improve” copy during implementation.
- Do not invent biography, credentials, experience, achievements, projects, or contact details.
- If copy needs revision later, update this file deliberately.

---

## 2. Sitemap

```text
/
├── Home (EN)
├── about
├── contact
│
├── tr
│   ├── Home (TR)
│   ├── about
│   └── contact
│
└── 404
```

Projects is not public in V0.

---

# 3. Home / Ana Sayfa

## 3.1 Hero

### English

Greeting:

> Hi, I’m Ali Çolak

Professional title:

> Mechatronics Engineering Student

Description:

> I enjoy turning ideas to life through software, electronics and mechanics.

CTA:

> About Me

### Türkçe

Karşılama:

> Merhaba, ben Ali Çolak

Profesyonel/eğitim başlığı:

> Mekatronik Mühendisliği öğrencisiyim.

Açıklama:

> Yazılım, elektronik ve mekaniği bir araya getirerek fikirleri hayata geçirmeyi seviyorum.

CTA:

> Hakkımda

---

## 3.2 Currently / Şu anda

### English

Label:

> Studying

Content:

> Mechatronics Engineering at Marmara University

Label:

> Learning

Content:

> Robotics, computer vision, embedded systems and modern web development.

Label:

> Working on

Content:

> Personal projects and Marmara Rover.

### Türkçe

Etiket:

> Eğitim

İçerik:

> Marmara Üniversitesi’nde Mekatronik Mühendisliği okuyorum.

Etiket:

> İlgi alanları

İçerik:

> Robotik, bilgisayarlı görü, gömülü sistemler ve modern web geliştirmeyi öğreniyorum.

Etiket:

> Mevcut çalışmalar

İçerik:

> Kişisel projelerim üzerinde ve Marmara Rover takımında çalışıyorum.

---

## 3.3 Contact CTA / İletişim

### English

Heading:

> Let's Connect

Description:

> If you'd like to get in touch, you can reach me here.

CTA:

> Contact Me

### Türkçe

Başlık:

> İletişime Geçelim

Açıklama:

> Benimle iletişime geçmek isterseniz, buradan ulaşabilirsiniz.

CTA:

> İletişime Geç

---

# 4. About / Hakkımda

## 4.1 Introduction / Tanıtım

### English

> I’m still at the beginning of my engineering journey, so I spend a lot of my time exploring different technologies and learning by actually using them. Over the past year, I’ve worked with things ranging from computer vision and ROS2 to embedded hardware and web development. I enjoy figuring out how things work, experimenting with them, and gradually turning what I learn into real projects.

### Türkçe

> Mühendislik yolculuğumun henüz başındayım. Bu yüzden zamanımın büyük bir kısmını farklı teknolojileri keşfederek ve onları doğrudan kullanarak öğrenmeye ayırıyorum. Geçtiğimiz yıl boyunca bilgisayarlı görü ve ROS2’den gömülü sistemlere ve web geliştirmeye kadar farklı alanlarda çalışma fırsatı buldum. Bir şeylerin nasıl çalıştığını anlamayı, yeni şeyler denemeyi ve öğrendiklerimi zamanla gerçek projelere dönüştürmeyi seviyorum.

---

## 4.2 Education / Eğitim

Current publication decision: only the Marmara University entry is included.
The owner deferred the high-school entry for now. Entry 2 below is retained as
approved reference copy, not content to publish or render until requested.

### English

Entry 1:

> **Marmara University**  
> Mechatronics Engineering  
> 2025 — Present

Entry 2:

> **OİB Mesleki ve Teknik Anadolu Lisesi**  
> Motor Vehicles Technology  
> 2020 — 2024

### Türkçe

Kayıt 1:

> **Marmara Üniversitesi**  
> Mekatronik Mühendisliği  
> 2025 — Günümüz

Kayıt 2:

> **OİB Mesleki ve Teknik Anadolu Lisesi**  
> Motorlu Araçlar Teknolojisi  
> 2020 — 2024

---

# 5. Contact / İletişim

## 5.1 English

Description:

> If you'd like to get in touch, feel free to reach out through any of the links below.

Labels:

> Email  
> GitHub  
> LinkedIn

## 5.2 Türkçe

Açıklama:

> Benimle iletişime geçmek isterseniz, aşağıdaki bağlantılardan herhangi biri üzerinden bana ulaşabilirsiniz.

Etiketler:

> E-posta  
> GitHub  
> LinkedIn

Actual Email/GitHub/LinkedIn values must come from approved site settings.

### Approved site settings — 2026-09-23

- Email: `colak.ali1928@gmail.com`
- GitHub: `https://github.com/Ali-Colak06`
- LinkedIn: `https://www.linkedin.com/in/ali-çolak-94ba8534b`

The owner supplied these public contact values. The LinkedIn URL uses HTTPS;
the supplied profile path is preserved.

Do not use design mockup placeholders such as:

```text
ali@example.com
github.com/alicolak
linkedin.com/in/alicolak
```

unless those exact values are later explicitly approved as real data.

---

# 6. 404

## 6.1 English

Heading:

> 404 — Page Not Found

Description:

> The page you're looking for doesn't exist or may have been moved.

CTA:

> Back to Home

## 6.2 Türkçe

Başlık:

> 404 — Sayfa bulunamadı

Açıklama:

> Aradığınız sayfa mevcut değil veya taşınmış olabilir.

CTA:

> Ana Sayfaya Dön

---

# 7. Navbar

## 7.1 English

> Home  
> About  
> Contact  
> EN / TR  
> ☀ / ☾

## 7.2 Türkçe

> Ana Sayfa  
> Hakkımda  
> İletişim  
> EN / TR  
> ☀ / ☾

The visual form of the language and theme controls is defined by `DESIGN.md`.

Accessible control labels from the approved interaction reference:

| Purpose | EN | TR |
| --- | --- | --- |
| Main navigation | Main navigation | Ana menü |
| Switch to dark | Switch to dark theme | Koyu temaya geç |
| Switch to light | Switch to light theme | Açık temaya geç |

---

# 8. Footer

Current conceptual content:

> Ali Çolak  
> Built with Astro & Sanity  
> © <current year> Ali Çolak

The supplied content draft currently shows `© 2026 Ali Çolak`; implementation should keep the previously agreed behavior of producing the current year dynamically rather than hard-coding 2026 permanently.

---

# 9. Profile image

A profile image is now part of V0.

The image itself is a media asset rather than written copy.

This document does not decide:

- where the image is stored,
- where it appears,
- crop/aspect ratio,
- size,
- responsive behavior,
- whether it is informative or decorative for accessibility purposes.

Those decisions belong in `SANITY.md`, `ARCHITECTURE.md`, and `DESIGN.md` as appropriate.

Do not substitute an AI-generated, stock, or placeholder portrait for the approved profile image.

---

# 10. Content intentionally absent from V0

Do not create copy for:

- Projects,
- project cards,
- project case studies,
- Skills,
- Technologies,
- Certifications,
- Experience,
- Goals,
- Outside Engineering,
- long biography,
- CV/Resume section,
- Blog,
- testimonials.

These are outside the current public content scope.

---

# 11. Current project publication status

Do not add public portfolio copy for unfinished projects simply to fill space.

Current direction:

- LogWise is not part of initial public V0.
- Iron Man Arc Reactor Clock is not part of initial public V0.
- Marmara Rover publication is deferred until it is appropriate as a completed/ready portfolio item.

---

# 12. Copy integrity rules

AI coding agents must not:

- rewrite approved copy without instruction,
- make the biography sound more senior than it is,
- invent employment history,
- invent awards,
- invent certificates,
- invent project results,
- invent metrics,
- invent client work,
- invent contact details,
- silently change school names,
- silently change dates,
- silently “correct” English or Turkish copy.

If copy needs improvement, propose it separately rather than modifying the source of truth during implementation.

---

# 13. Source-of-truth boundary

| Question | Source |
|---|---|
| Product scope | `PROJECT_SPEC.md` |
| Architecture | `ARCHITECTURE.md` |
| CMS model | `SANITY.md` |
| Exact copy | `CONTENT.md` |
| Visual design | `DESIGN.md` |
| AI coding behavior | `AGENTS.md` |
