"use client";

import React from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";

const TermsPage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-4">
                            Terms of Use Agreement
                        </h1>
                        <p className="text-muted-foreground">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </p>
                    </div>

                    <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                        <section>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Welcome to 4Sight AI! This Terms of Use Agreement (“Agreement”) is a legally binding contract between you and 4Sight AI LLC (“4Sight AI,” “we,” “us,” or “our”), governing your use of our artificial intelligence-based applications, website, and services (collectively, the "Services"). Please carefully review the following terms before accessing or using the Services. By accessing or using any part of the Services, you agree to be bound by these terms.
                            </p>
                            <p className="mt-4 font-medium text-foreground">
                                If you do not agree with these terms, you should not use our Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By using the Services, you agree to be bound by this Agreement, as well as any additional terms specific to certain Services. If there is a conflict between these terms and any specific additional terms, the additional terms will govern.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Privacy Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Services, you consent to our collection and use of your information as outlined in the Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. License and Access to Services</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                4SightAI grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal and professional purposes, in accordance with this Agreement. You are not permitted to copy, modify, distribute, sell, or lease any part of the Services without our written permission. The Services may include artificial intelligence solutions, machine learning models, and other related products.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. User-Generated Content</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By submitting User-Generated Content through the Services, you grant 4Sight AI a non-exclusive, perpetual, transferable, royalty-free license to use, modify, and display your content. You retain ownership of your content, but 4Sight AI may use it for the purposes of providing and improving the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Third-Party Content</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our Services may contain content provided by third parties, including links to third-party websites or resources. We are not responsible for third-party content or for the availability of such content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All intellectual property rights in the Services and 4Sight AI content are owned by us or our licensors. You may not use any of our trademarks, logos, or proprietary marks without our prior written permission. The artificial intelligence models, algorithms, and technologies developed by 4Sight AI are proprietary and may not be reverse-engineered, disassembled, or otherwise used without authorization.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Termination</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We reserve the right to terminate your access to the Services at any time if you violate any terms of this Agreement. Upon termination, you must immediately cease all use of the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Changes to the Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may revise this Agreement from time to time. The latest version of the Agreement will be posted on our website. Your continued use of the Services after any changes are made will constitute your acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                4Sight AI is not liable for any indirect, incidental, special, or consequential damages arising from your use of the Services. In no event shall 4Sight AI’s total liability exceed the amount you paid for the Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                This Agreement is governed by the laws of the state or country where 4Sight AI operates. Any disputes arising out of this Agreement shall be resolved in the courts of that jurisdiction.
                            </p>
                        </section>

                        <div className="border-t border-border pt-8 mt-12">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions or concerns about these Terms of Use, please contact us at:{" "}
                                <Link
                                    href="mailto:aiagent@4sightai.com"
                                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                                >
                                    aiagent@4sightai.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default TermsPage;
