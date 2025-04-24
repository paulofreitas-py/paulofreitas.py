const profiles = [
    {
        id: "data-science",
        heroClass: "hero",
        img: "https://avatars.githubusercontent.com/u/42820569?v=4",
        title: "PauloFreitas.py",
        description: "Cientista de Dados",
        content: `
            <section class="py-5">
                <div class="row align-items-center">
                    <div class="col-lg-7 mb-4 mb-lg-0">
                        <h2 class="section-title">Sobre Mim como Cientista de Dados</h2>
                        <p class="lead text-muted">Especialista em transformar dados brutos em insights valiosos através de análise avançada e machine learning.</p>
                        <p>Com experiência em implementação de pipelines de dados completos, desde a coleta e limpeza até a modelagem preditiva e visualização. Apaixonado por resolver problemas complexos com abordagens baseadas em dados.</p>
                        <p>Minha abordagem combina rigor científico com pragmatismo técnico, garantindo soluções que são tanto teoricamente sólidas quanto praticamente aplicáveis.</p>
                    </div>
                    <div class="col-lg-5">
                        <div class="card shadow-sm border-0 p-4">
                            <div class="mb-3">
                                <span class="fs-2 text-primary"><i class="fas fa-brain"></i></span>
                                <span class="fw-bold fs-4 align-middle ms-2">Especializações em Dados</span>
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Machine Learning:</b> Modelos preditivos e classificação</li>
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Análise Exploratória:</b> Identificação de padrões e insights</li>
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Visualização de Dados:</b> Dashboards e relatórios interativos</li>
                                <li><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Big Data:</b> Processamento de grandes volumes de dados</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5 bg-light">
                <h2 class="section-title text-center">Habilidades em Ciência de Dados</h2>
                <div class="text-center mb-4">
                    <span class="badge bg-primary skill-badge"><i class="devicon-python-plain"></i> Python</span>
                    <span class="badge bg-secondary skill-badge"><i class="fas fa-database"></i> SQL</span>
                    <span class="badge bg-success skill-badge"><i class="devicon-pandas-original"></i> Pandas</span>
                    <span class="badge bg-danger skill-badge"><i class="fas fa-chart-line"></i> Análise de Dados</span>
                    <span class="badge bg-warning text-dark skill-badge"><i class="fas fa-robot"></i> Machine Learning</span>
                    <span class="badge bg-info skill-badge"><i class="devicon-tensorflow-original"></i> TensorFlow</span>
                    <span class="badge bg-dark skill-badge"><i class="fas fa-project-diagram"></i> Redes Neurais</span>
                    <span class="badge bg-primary skill-badge"><i class="fas fa-cloud"></i> Big Data</span>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#ffd43b;">
                                <i class="devicon-python-plain"></i>
                            </div>
                            <h4 class="fw-bold mb-2">Programação</h4>
                            <p>Desenvolvimento de scripts e aplicações em Python para análise e processamento de dados.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#8e44ad;">
                                <i class="fas fa-robot"></i>
                            </div>
                            <h4 class="fw-bold mb-2">Machine Learning</h4>
                            <p>Implementação de modelos preditivos e algoritmos de aprendizado de máquina.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#ff5e7e;">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <h4 class="fw-bold mb-2">Visualização</h4>
                            <p>Criação de dashboards e visualizações interativas para comunicação de insights.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5">
                <h2 class="section-title">Projetos em Ciência de Dados</h2>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="project-card shadow-sm bg-white p-4 h-100 rounded-4">
                            <img src="img/projetos/projeto1.jpg" alt="Thumb API de Cotações" class="project-thumb-img mb-3">
                            <h5 class="fw-bold mb-2">API de Cotações</h5>
                            <p class="mb-3">API para consulta de cotações de moedas e criptomoedas em tempo real.</p>
                            <div class="mb-3">
                                <span class="badge badge-tech bg-primary">Python</span>
                                <span class="badge badge-tech bg-success">Flask</span>
                                <span class="badge badge-tech bg-info text-dark">API</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary">Ver Projeto</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="project-card shadow-sm bg-white p-4 h-100 rounded-4">
                            <img src="img/projetos/projeto2.jpg" alt="Thumb Modelo Preditivo" class="project-thumb-img mb-3">
                            <h5 class="fw-bold mb-2">Modelo Preditivo</h5>
                            <p class="mb-3">Modelo de machine learning para prever comportamentos de clientes.</p>
                            <div class="mb-3">
                                <span class="badge badge-tech bg-primary">Python</span>
                                <span class="badge badge-tech bg-warning text-dark">Scikit-learn</span>
                                <span class="badge badge-tech bg-secondary">ML</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary">Ver Projeto</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="project-card shadow-sm bg-white p-4 h-100 rounded-4">
                            <img src="img/projetos/projeto3.jpg" alt="Thumb Análise de Dados" class="project-thumb-img mb-3">
                            <h5 class="fw-bold mb-2">Análise de Dados</h5>
                            <p class="mb-3">Notebooks Jupyter com análises exploratórias de conjuntos de dados públicos.</p>
                            <div class="mb-3">
                                <span class="badge badge-tech bg-primary">Python</span>
                                <span class="badge badge-tech bg-danger">Pandas</span>
                                <span class="badge badge-tech bg-info text-dark">Data Analysis</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary">Ver Projeto</a>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    {
        id: "raw",
        heroClass: "hero design",
        img: "assets/profiles/1.jpeg",
        title: "PauloFreitas.raw",
        description: "Designer, Fotógrafo & Editor de Fotos",
        content: `
            <section class="py-5">
                <div class="row align-items-center">
                    <div class="col-lg-7 mb-4 mb-lg-0">
                        <h2 class="section-title">Sobre Mim</h2>
                        <p class="lead text-muted">Designer gráfico, fotógrafo e editor de fotos apaixonado por criar experiências visuais marcantes.</p>
                        <p>Atuo desde a concepção de identidades visuais, passando pela criação de layouts digitais, até a edição e manipulação criativa de imagens para campanhas e redes sociais.</p>
                        <p>Minha abordagem une criatividade, técnica e sensibilidade artística para entregar resultados únicos e impactantes.</p>
                    </div>
                    <div class="col-lg-5">
                        <div class="card shadow-sm border-0 p-4">
                            <div class="mb-3">
                                <span class="fs-2 text-primary"><i class="fas fa-palette"></i></span>
                                <span class="fw-bold fs-4 align-middle ms-2">Especializações Visuais</span>
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Branding:</b> Identidade visual e manual de marca</li>
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Design Digital:</b> Interfaces, banners e mídias sociais</li>
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Fotografia:</b> Edição, color grading e manipulação</li>
                                <li><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Ilustração:</b> Vetores e arte digital</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5 bg-light">
                <h2 class="section-title text-center">Habilidades em Design, Foto & Edição</h2>
                <div class="text-center mb-4">
                    <span class="badge bg-primary skill-badge"><i class="fab fa-adobe"></i> Photoshop</span>
                    <span class="badge bg-secondary skill-badge"><i class="fab fa-adobe"></i> Illustrator</span>
                    <span class="badge bg-success skill-badge"><i class="fab fa-figma"></i> Figma</span>
                    <span class="badge bg-info text-dark skill-badge"><i class="fas fa-camera-retro"></i> Lightroom</span>
                    <span class="badge bg-warning text-dark skill-badge"><i class="fas fa-font"></i> Tipografia</span>
                    <span class="badge bg-dark skill-badge"><i class="fas fa-magic"></i> Efeitos Visuais</span>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#ff512f;">
                                <i class="fab fa-adobe"></i>
                            </div>
                            <h4 class="fw-bold mb-2">Identidade Visual</h4>
                            <p>Criação de logotipos, paletas e sistemas de identidade para marcas.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#2980b9;">
                                <i class="fas fa-camera-retro"></i>
                            </div>
                            <h4 class="fw-bold mb-2">Fotografia & Edição</h4>
                            <p>Tratamento, manipulação criativa e color grading de imagens.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#f7b731;">
                                <i class="fas fa-magic"></i>
                            </div>
                            <h4 class="fw-bold mb-2">Efeitos Visuais</h4>
                            <p>Aplicação de filtros, efeitos e composições para campanhas e redes sociais.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5">
                <h2 class="section-title">Portfólio de Artes</h2>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="project-card shadow-sm bg-white p-4 h-100 rounded-4">
                            <img src="img/projetos/projeto4.jpg" alt="Thumb Identidade Visual" class="project-thumb-img mb-3">
                            <h5 class="fw-bold mb-2">Identidade Visual</h5>
                            <p class="mb-3">Criação de logotipos e sistemas de identidade visual para marcas.</p>
                            <div class="mb-3">
                                <span class="badge badge-tech bg-primary">Branding</span>
                                <span class="badge badge-tech bg-success">Photoshop</span>
                                <span class="badge badge-tech bg-warning text-dark">Illustrator</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary">Ver Projeto</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="project-card shadow-sm bg-white p-4 h-100 rounded-4">
                            <img src="img/projetos/projeto5.jpg" alt="Thumb Design de Interfaces" class="project-thumb-img mb-3">
                            <h5 class="fw-bold mb-2">Design de Interfaces</h5>
                            <p class="mb-3">Protótipos de aplicativos e sites modernos e responsivos.</p>
                            <div class="mb-3">
                                <span class="badge badge-tech bg-success">Figma</span>
                                <span class="badge badge-tech bg-info text-dark">UI/UX</span>
                                <span class="badge badge-tech bg-primary">Adobe XD</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary">Ver Projeto</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="project-card shadow-sm bg-white p-4 h-100 rounded-4">
                            <img src="img/projetos/projeto6.jpg" alt="Thumb Arte Digital" class="project-thumb-img mb-3">
                            <h5 class="fw-bold mb-2">Arte Digital</h5>
                            <p class="mb-3">Ilustrações e composições digitais para campanhas e redes sociais.</p>
                            <div class="mb-3">
                                <span class="badge badge-tech bg-danger">Canva</span>
                                <span class="badge badge-tech bg-dark">Adobe Firefly</span>
                                <span class="badge badge-tech bg-info text-dark">Midjourney</span>
                            </div>
                            <a href="#" class="btn btn-outline-primary">Ver Projeto</a>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    {
        id: "ia",
        heroClass: "hero ia",
        img: "assets/profiles/3.jpeg",
        title: "PauloFreitas.ia",
        description: "Computação Criativa & IA Generativa",
        content: `
            <section class="py-5">
                <div class="row align-items-center">
                    <div class="col-lg-7 mb-4 mb-lg-0">
                        <h2 class="section-title">Sobre Mim em Computação Criativa</h2>
                        <p class="lead text-muted">Explorador de novas fronteiras entre código, arte e inteligência artificial.</p>
                        <p>Trabalho com geração de imagens, arte generativa, automação criativa e integração de IA em fluxos de design e desenvolvimento.</p>
                        <p>Minha missão é unir criatividade humana e algoritmos para criar experiências visuais inovadoras e soluções digitais inteligentes.</p>
                    </div>
                    <div class="col-lg-5">
                        <div class="card shadow-sm border-0 p-4">
                            <div class="mb-3">
                                <span class="fs-2 text-primary"><i class="fas fa-robot"></i></span>
                                <span class="fw-bold fs-4 align-middle ms-2">Especializações em IA Criativa</span>
                            </div>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Arte Generativa:</b> Imagens e vídeos com IA</li>
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Automação Criativa:</b> Scripts para design e arte</li>
                                <li class="mb-2"><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Integração de APIs:</b> Midjourney, DALL-E, Firefly</li>
                                <li><span class="text-primary"><i class="fas fa-check-circle"></i></span> <b>Desenvolvimento Generativo:</b> Código + Criatividade</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5 bg-light">
                <h2 class="section-title text-center">Habilidades em Computação Criativa</h2>
                <div class="text-center mb-4">
                    <span class="badge bg-primary skill-badge"><i class="fas fa-brain"></i> IA Generativa</span>
                    <span class="badge bg-secondary skill-badge"><i class="fas fa-code"></i> Python</span>
                    <span class="badge bg-success skill-badge"><i class="fas fa-image"></i> Geração de Imagem</span>
                    <span class="badge bg-info text-dark skill-badge"><i class="fas fa-video"></i> Vídeo com IA</span>
                    <span class="badge bg-warning text-dark skill-badge"><i class="fas fa-bolt"></i> Automação</span>
                    <span class="badge bg-dark skill-badge"><i class="fas fa-plug"></i> APIs Criativas</span>
                </div>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#6c63ff;">
                                <i class="fas fa-brain"></i>
                            </div>
                            <h4 class="fw-bold mb-2">IA Generativa</h4>
                            <p>Criação de imagens, vídeos e textos com modelos de inteligência artificial.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#00b894;">
                                <i class="fas fa-bolt"></i>
                            </div>
                            <h4 class="fw-bold mb-2">Automação Criativa</h4>
                            <p>Automação de processos criativos com código e integração de APIs.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm p-4 h-100 text-center">
                            <div class="mb-3" style="font-size:2.5rem;color:#fdcb6e;">
                                <i class="fas fa-plug"></i>
                            </div>
                            <h4 class="fw-bold mb-2">APIs & Ferramentas</h4>
                            <p>Uso de Midjourney, DALL-E, Firefly, Runway e outras ferramentas IA.</p>
                        </div>
                    </div>
                </div>
            </section>
        `
    }
];

let currentProfileIndex = 0;

function updateProfile() {
    const profile = profiles[currentProfileIndex];
    document.getElementById('profile-title').textContent = profile.title;
    document.getElementById('profile-description').textContent = profile.description;
    document.getElementById('profile-img').src = profile.img;
    document.getElementById('dynamic-profiles').innerHTML = profile.content;

    // Atualiza classe do hero para mudar o gradiente
    const heroSection = document.getElementById('home');
    heroSection.className = profile.heroClass + " " + profile.id + " text-center";
    // Atualiza indicadores
    document.querySelectorAll('.profile-indicator').forEach((el, idx) => {
        el.classList.toggle('active', idx === currentProfileIndex);
    });
}

document.getElementById('prev-profile').addEventListener('click', () => {
    currentProfileIndex = (currentProfileIndex - 1 + profiles.length) % profiles.length;
    updateProfile();
});

document.getElementById('next-profile').addEventListener('click', () => {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    updateProfile();
});

// Inicializa com o primeiro perfil
updateProfile();