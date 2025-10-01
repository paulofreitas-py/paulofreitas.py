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
                            <img src="assets/projetos/AC.png" alt="Thumb API de Cotações" class="project-thumb-img mb-3">
                            <h5 class="fw-bold mb-2">API de Cotações</h5>
                            <p class="mb-3">API para consulta de cotações de moedas e criptomoedas em tempo real.</p>
                            <div class="mb-3">
                                <img src="img/agents/python.svg" width="28" alt="Python" title="Python" class="me-1">
                                <img src="img/agents/flask.svg" width="28" alt="Flask" title="Flask" class="me-1">
                                <img src="img/agents/api.svg" width="28" alt="API" title="API" class="me-1">
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
                                <img src="img/agents/python.svg" width="28" alt="Python" title="Python" class="me-1">
                                <img src="img/agents/scikit-learn.svg" width="28" alt="Scikit-learn" title="Scikit-learn" class="me-1">
                                <img src="img/agents/ml.svg" width="28" alt="ML" title="ML" class="me-1">
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
                                <img src="img/agents/python.svg" width="28" alt="Python" title="Python" class="me-1">
                                <img src="img/agents/pandas.svg" width="28" alt="Pandas" title="Pandas" class="me-1">
                                <img src="img/agents/data-analysis.svg" width="28" alt="Data Analysis" title="Data Analysis" class="me-1">
                            </div>
                            <a href="#" class="btn btn-outline-primary">Ver Projeto</a>
                        </div>
                    </div>
                </div>
            </section>
        `
    },
    {
        id: "hydra",
        heroClass: "hero hydra-gradient-bg",
        img: "assets/profiles/hydra-logo.png",
        title: "Hydra Analytics",
        description: "Inteligência de Dados para Pequenos Negócios",
        content: `
    <section class="py-5">
        <div class="row align-items-center">
            <div class="col-lg-7 mb-4 mb-lg-0">
                <h2 class="section-title mb-3">
                    <img src="assets/profiles/hydra-logo.png" alt="Hydra Logo" style="height:40px;vertical-align:middle;margin-right:10px;">
                    Sobre a Hydra Analytics
                </h2>
                <p class="lead text-muted">A Hydra Analytics é uma empresa focada em levar inteligência de dados acessível a pequenos negócios, empreendedores e comércios locais.</p>
                <p>Combinamos dashboards claros, relatórios automáticos e automações inteligentes para simplificar a gestão e multiplicar insights.</p>
                <ul class="list-unstyled mb-4">
                    <li><span class="fw-bold text-primary">🔹 Missão:</span> democratizar análise de dados e automação.</li>
                    <li><span class="fw-bold text-primary">🔹 Visão:</span> ser referência nacional em soluções de BI para pequenos negócios.</li>
                    <li><span class="fw-bold text-primary">🔹 Valores:</span> clareza, simplicidade, acessibilidade e inovação.</li>
                </ul>
            </div>
            <div class="col-lg-5 text-center">
                <img src="assets/profiles/hydra-banner.png" alt="Hydra Analytics Banner" class="img-fluid rounded-4 shadow" style="max-width:380px;">
            </div>
        </div>
    </section>
    <section class="py-5 bg-light">
        <h2 class="section-title text-center mb-4">Especializações</h2>
        <div class="row g-4 justify-content-center">
            <div class="col-md-4">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <div style="font-size:2.5rem;color:#F2C811;">
                        <i class="devicon-powerbi-plain"></i>
                        <i class="devicon-microsoftsqlserver-plain colored"></i>
                        <img src="assets/icons/dax.svg" alt="DAX" style="height:32px;">
                    </div>
                    <h4 class="fw-bold mb-2">Business Intelligence (BI)</h4>
                    <p>Power BI, SQL, DAX</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <div style="font-size:2.5rem;color:#00c9a7;">
                        <img src="assets/icons/n8n.svg" alt="n8n" style="height:32px;">
                    </div>
                    <h4 class="fw-bold mb-2">Automação</h4>
                    <p>n8n para orquestração de fluxos inteligentes</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <div style="font-size:2.5rem;color:#6c63ff;">
                        <i class="devicon-database-plain"></i>
                        <i class="devicon-python-plain"></i>
                    </div>
                    <h4 class="fw-bold mb-2">Modelagem de Dados</h4>
                    <p>Estruturação e limpeza de dados</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <div style="font-size:2.5rem;color:#2e8bff;">
                        <i class="fas fa-chart-bar"></i>
                        <i class="devicon-powerbi-plain"></i>
                    </div>
                    <h4 class="fw-bold mb-2">Dashboards</h4>
                    <p>Design de indicadores claros e práticos</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <div style="font-size:2.5rem;color:#8e44ad;">
                        <i class="fas fa-user-tie"></i>
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h4 class="fw-bold mb-2">Consultoria</h4>
                    <p>Apoio estratégico para tomada de decisão</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5">
        <h2 class="section-title text-center mb-4">Habilidades Hydra + Pessoais</h2>
        <div class="text-center mb-4">
            <span class="badge bg-primary skill-badge"><i class="devicon-powerbi-plain"></i> Power BI</span>
            <span class="badge bg-success skill-badge"><i class="devicon-microsoftsqlserver-plain colored"></i> SQL</span>
            <span class="badge bg-warning text-dark skill-badge"><img src="assets/icons/dax.svg" alt="DAX" style="height:18px;"> DAX</span>
            <span class="badge bg-info skill-badge"><img src="assets/icons/n8n.svg" alt="n8n" style="height:18px;"> n8n</span>
            <span class="badge bg-secondary skill-badge"><i class="fas fa-bullseye"></i> KPIs</span>
            <span class="badge bg-dark skill-badge"><i class="fas fa-user-tie"></i> Consultoria</span>
        </div>
        <ul class="list-unstyled fs-5 mb-4">
            <li>✅ Desenvolvimento de dashboards no Power BI</li>
            <li>✅ Criação de relatórios automáticos com SQL e DAX</li>
            <li>✅ Integrações e automações com n8n</li>
            <li>✅ Planejamento de KPIs para diferentes setores (hotéis, pousadas, farmácias, MEIs, lojas locais)</li>
            <li>✅ Capacidade de traduzir dados complexos em informações simples e visuais</li>
        </ul>
    </section>
    <section class="py-5 bg-light">
        <h2 class="section-title text-center mb-4">Portfólio Hydra (Exemplos Práticos)</h2>
        <div class="row g-4">
            <div class="col-md-3">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <h5 class="fw-bold mb-2">Hotelaria</h5>
                    <p>Painel de ocupação, reservas e faturamento por temporada</p>
                    <img src="assets/demos/banner/hotelaria.png" alt="Dashboard Hotelaria" class="img-fluid rounded mb-2">
                    <button class="btn btn-primary mt-2" onclick="window.open('assets/demos/Hotel V3.html','_blank')">Demo</button>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <h5 class="fw-bold mb-2">Farmácia</h5>
                    <p>Controle de estoque, ticket médio e ranking de vendas</p>
                    <img src="assets/demos/banner/farmacia.png" alt="Dashboard Farmácia" class="img-fluid rounded mb-2">
                    <button class="btn btn-primary mt-2" onclick="window.open('assets/demos/Farmacia.html','_blank')">Demo</button>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <h5 class="fw-bold mb-2">Comércio Local</h5>
                    <p>Fluxo de caixa e acompanhamento de clientes</p>
                    <img src="assets/demos/banner/comercio.png" alt="Dashboard Comércio" class="img-fluid rounded mb-2">
                    <button class="btn btn-primary mt-2" onclick="window.open('assets/demos/Comercio.html','_blank')">Demo</button>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow-sm p-4 h-100 text-center">
                    <h5 class="fw-bold mb-2">MEI</h5>
                    <p>Relatórios financeiros e acompanhamento de custos básicos</p>
                    <img src="assets/demos/banner/mei.png" alt="Dashboard MEI" class="img-fluid rounded mb-2">
                    <button class="btn btn-primary mt-2" onclick="window.open('assets/demos/MEI.html','_blank')">Demo</button>
                </div>
            </div>
        </div>
        <div class="text-center mt-4">
            <span class="text-muted">*Aqui você pode colocar prints de dashboards ou links para demos</span>
        </div>
    </section>
    <section class="py-5">
        <h2 class="section-title text-center mb-4">Templates n8n (Demonstração)</h2>
        <div class="row g-4 justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-sm p-4 h-100">
                    <h5 class="fw-bold mb-2"><img src="assets/icons/n8n.svg" alt="n8n" style="height:22px;"> Integração com Google Sheets</h5>
                    <p>Envio automático de dados coletados para relatórios</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow-sm p-4 h-100">
                    <h5 class="fw-bold mb-2"><img src="assets/icons/n8n.svg" alt="n8n" style="height:22px;"> Automação de emails</h5>
                    <p>Alertas de estoque baixo ou faturamento diário</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow-sm p-4 h-100">
                    <h5 class="fw-bold mb-2"><img src="assets/icons/n8n.svg" alt="n8n" style="height:22px;"> Gestão de leads</h5>
                    <p>Integração entre formulário → CRM → Power BI</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow-sm p-4 h-100">
                    <h5 class="fw-bold mb-2"><img src="assets/icons/n8n.svg" alt="n8n" style="height:22px;"> Controle de pedidos</h5>
                    <p>Automação para vendas online e atualização de estoque</p>
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
        <!-- Galeria Computação Criativa -->
        <section class="py-5">
            <h2 class="section-title text-center mb-4">Galeria Computação Criativa</h2>
            <div id="creativeGalleryCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner rounded-4 shadow">
                    <div class="carousel-item active">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center">
                                <img src="assets/creative/creative1.png" class="d-block w-100 rounded-4" alt="Arte Criativa 1">
                            </div>
                            <div class="col-md-6">
                                <div class="p-4">
                                    <h5 class="fw-bold mb-2">Descrição:</h5>
                                    <p class="mb-0 text-muted">"Onde algoritmos ganham alma: transformamos códigos em arte e arte em código."</p>
                                    <a href="creative.html" target="_blank" class="btn btn-primary btn-lg fw-bold w-100">
                                        Explore Mais Trabalhos
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
        <!-- Galeria IA Generativa -->
        <section class="py-5">
            <h2 class="section-title text-center mb-4">Galeria IA Generativa</h2>
            <div id="iaGalleryCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner rounded-4 shadow">
                    <div class="carousel-item active">
                        <div class="row align-items-center">
                            <div class="col-md-6 text-center">
                                <img src="assets/ia/iag.png" class="d-block w-100 rounded-4" alt="Arte IA 1">
                            </div>
                            <div class="col-md-6">
                                <div class="p-4">
                                    <h5 class="fw-bold mb-2">Descrição:</h5>
                                    <p class="mb-0 text-muted">"IA generativa é o espelho onde a imaginação artificial se revelas"</p>
                                <a href="galeria.html" target="_blank" class="btn btn-primary btn-lg fw-bold w-100">
                                    Acesse a Galeria Completa
                                </a>
                            </div>
                        </div>
                    </div>                       
            </div>
        </section>
        <!-- Agentes de IA -->
        <section class="py-5 bg-light">
            <h2 class="section-title text-center mb-4">Meus Agentes de IA</h2>
            <div class="container">
                <div class="row g-4 justify-content-center">
                    <!-- Agente 1 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="card shadow-sm p-4 h-100">
                            <div class="d-flex align-items-center mb-3">
                                <img src="https://tessai.io/wp-content/uploads/2025/02/ai-agent-2-tess-ai-150x150.png" alt="The Business Podcast Creator" class="rounded-circle me-3" width="64" height="64">
                                <div>
                                    <span class="fw-bold text-secondary" style="font-size:1.1rem;">Agent name: Voxen</span><br>
                                    <span class="fw-bold" style="font-size:1.2rem;">The Business Podcast Creator</span>
                                    <div class="mt-1">
                                        <img src="https://tessai.io/wp-content/uploads/2025/02/ai-agent-1-podcast-creator-builder-google-openai-gemini-elevenlabs-leonardo-ai.png" width="200" alt="Google">
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light rounded p-3 mb-2" style="font-size:0.98rem;">
                                <span class="fw-semibold">Veja instruções:</span>
                                <ol class="mb-0 mt-2 ps-3" style="font-size:0.97rem;">
                                    <li>Google: faça scraping de dados dos principais sites de notícias sobre IA.</li>
                                    <li>OpenAI: leia e compile as informações mais importantes.</li>
                                    <li>Gemini: transforme em uma narrativa envolvente para podcast.</li>
                                    <li>ElevenLabs: gere o áudio a partir do texto.</li>
                                    <li>Leonardo AI: crie 4 opções de capas para o episódio.</li>
                                </ol>
                            </div>
                            <div class="text-center mt-3">
                                <button class="btn btn-outline-secondary" disabled>Testar (em breve)</button>
                            </div>
                        </div>
                    </div>
                    <!-- Agente 2 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="card shadow-sm p-4 h-100">
                            <div class="d-flex align-items-center mb-3">
                                <img src="https://tessai.io/wp-content/uploads/2025/02/ai-agent-3-tess-ai-150x150.png" alt="Customer Experience for WhatsApp" class="rounded-circle me-3" width="64" height="64">
                                <div>
                                    <span class="fw-bold text-secondary" style="font-size:1.1rem;">Agent name:Zara</span><br>
                                    <span class="fw-bold" style="font-size:1.2rem;">Customer Experience for WhatsApp</span>
                                    <div class="mt-1">
                                        <img src="https://tessai.io/wp-content/uploads/2025/02/ai-agent-2-builder-cs-experience-whatsapp-zapier-deepgram-cohere-sheets-pdf-claude.png" width="150" alt="WhatsApp">
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light rounded p-3 mb-2" style="font-size:0.98rem;">
                                <span class="fw-semibold">Veja instruções:</span>
                                <ol class="mb-0 mt-2 ps-3" style="font-size:0.97rem;">
                                    <li>WhatsApp: automatize o atendimento e receba mensagens dos clientes.</li>
                                    <li>Zapier: conecte fluxos automáticos com outros apps e serviços.</li>
                                    <li>Deepgram: transcreva áudios recebidos para texto automaticamente.</li>
                                    <li>Google Sheets: registre e organize dados de atendimento em planilhas.</li>
                                    <li>PDF: gere relatórios automáticos em PDF para acompanhamento.</li>
                                    <li>FigJam: visualize fluxos de atendimento e ideias colaborativas.</li>
                                    <li>Make: crie automações criativas e integrações personalizadas.</li>
                                </ol>
                            </div>
                            <div class="text-center mt-3">
                                <button class="btn btn-outline-secondary" disabled>Testar (em breve)</button>
                            </div>
                        </div>
                    </div>
                    <!-- Agente 3 -->
                    <div class="col-md-6 col-lg-4">
                        <div class="card shadow-sm p-4 h-100">
                            <div class="d-flex align-items-center mb-3">
                                <img src="https://tessai.io/wp-content/uploads/2025/02/ai-agent-1-tess-ai-150x150.png" alt="Creative Content Studio" class="rounded-circle me-3" width="64" height="64">
                                <div>
                                    <span class="fw-bold text-secondary" style="font-size:1.1rem;">Agent name: Liora</span><br>
                                    <span class="fw-bold" style="font-size:1.2rem;">Creative Content Studio</span>
                                    <div class="mt-1">
                                        <img src="https://tessai.io/wp-content/uploads/2025/02/ai-agent-3-builder-sales-helper-drive-deepgram-meta-llama-openai-hubspot.png" width="150" alt="Drive" title="Google Drive" class="me-1">
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light rounded p-3 mb-2" style="font-size:0.98rem;">
                                <span class="fw-semibold">Veja instruções:</span>
                                <ol class="mb-0 mt-2 ps-3" style="font-size:0.97rem;">
                                    <li>Google Drive: organiza e armazena roteiros, imagens e vídeos criados.</li>
                                    <li>Deepgram: transcreve áudios e vídeos automaticamente para facilitar legendas e acessibilidade.</li>
                                    <li>Meta: sugere tendências e formatos criativos para redes sociais.</li>
                                    <li>OpenAI: gera ideias de posts, roteiros, legendas e textos criativos.</li>
                                    <li>HubSpot: automatiza o agendamento e análise de engajamento das publicações.</li>
                                </ol>
                                <div class="mt-3 text-end">
                                    <em>feito por (chatgpt + n8n)</em>
                                </div>
                            </div>
                            <div class="text-center mt-3">
                                <button class="btn btn-outline-secondary" disabled>Testar (em breve)</button>
                            </div>
                        </div>
                    </div>
                    <!-- Adicione mais agentes conforme desejar -->
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

// Ativa o carrossel da galeria IA Generativa para trocar slides automaticamente a cada 4 segundos
document.addEventListener('DOMContentLoaded', function () {
    const iaCarousel = document.getElementById('iaGalleryCarousel');
    if (iaCarousel && typeof bootstrap !== 'undefined') {
        const carousel = new bootstrap.Carousel(iaCarousel, {
            interval: 1000, // 4 segundos
            ride: 'carousel',
            pause: false,
            wrap: true
        });
    }
});

// Array de frases dinâmicas
const dynamicPhrases = [
    "Onde algoritmos ganham alma: transformamos códigos em arte e arte em código.",
    "Criatividade e tecnologia unidas para criar o futuro.",
    "Explorando as fronteiras entre arte e inteligência artificial.",
    "Transformando ideias em experiências visuais inovadoras."
];

let currentPhraseIndex = 0;

function updateDynamicPhrase() {
    const phraseElement = document.querySelector('#creativeGalleryCarousel .carousel-item.active .mb-0.text-muted');
    if (phraseElement) {
// Adiciona animação de fade-out
        phraseElement.classList.add('fade-out');
        setTimeout(() => {
// Atualiza o texto e adiciona animação de fade-in
            currentPhraseIndex = (currentPhraseIndex + 1) % dynamicPhrases.length;
            phraseElement.textContent = `"${dynamicPhrases[currentPhraseIndex]}"`;
            phraseElement.classList.remove('fade-out');
            phraseElement.classList.add('fade-in');
        }, 500); // Tempo para o fade-out
    }
}
// Troca a frase a cada 4 segundos
setInterval(updateDynamicPhrase, 3000);

// FIM :)
