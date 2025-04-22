import { Card, CardContent } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Heart, LightbulbIcon, Target, Users } from 'lucide-react';
import { ComponentIcon } from '../ComponentIcon';
import { SingleTab, TabContent, TabOptions } from '../Tabs';
import Title from '../Title';

const companyValues = [
    {
        icon: <Heart className="text-c1 h-6 w-6" />,
        title: 'Trust',
        description:
            'Trust is the foundation of our work. We build it through transparent communication, reliable service, and craftsmanship. Our goal is to deliver results and foster relationships based on integrity.',
    },
    {
        icon: <Users className="text-c1 h-6 w-6" />,
        title: 'Integrity',
        description:
            'Integrity guides everything we do. We act with honesty, ethics, and professionalism, ensuring every project is handled with respect, responsibility, and dedication to delivering outstanding results.',
    },
    {
        icon: <LightbulbIcon className="text-c1 h-6 w-6" />,
        title: 'Excellence',
        description:
            'Excellence is our standard. We focus on delivering exceptional results, paying attention to detail, and continuously improving to provide unmatched service and value to our clients.',
    },
];

export function Philosophy({ className = '', id = '', isVisible }) {
    return (
        <section className={cn('mt-10 px-5 py-20', className)} id={id}>
            <div
                className={cn('container mx-auto transition-all duration-1000', {
                    'translate-y-0 opacity-100': isVisible,
                    'translate-y-10 opacity-0': !isVisible,
                })}
            >
                <div className="mb-10 text-center">
                    <Title titleIcon={Target} title="Our Philosophy" subtitle="What {Defines} Us" />
                </div>

                <Tabs defaultValue="mission" className="w-full">
                    <TabOptions>
                        <SingleTab name="Mission" value="mission" icon={Target} />
                        <SingleTab name="Vision" value="vision" icon={LightbulbIcon} />
                        <SingleTab name="Values" value="values" icon={Heart} />
                    </TabOptions>

                    <MisioVision
                        value="mission"
                        icon={Target}
                        title="Our Mission"
                        description="To design and build high-quality, innovative, and sustainable construction projects that meet the unique needs of our clients. We are dedicated to delivering excellence, fostering trust, and creating spaces that inspire and endure."
                    />

                    <MisioVision
                        value="vision"
                        icon={LightbulbIcon}
                        title="Our Vision"
                        description="To be a leading construction company recognized for our commitment to quality, innovation, and sustainability. We aim to shape the future of construction by creating impactful projects that enhance communities and improve lives."
                    />

                    <TabContent value="values" classWrap="grid grid-cols-1 gap-6 lg:grid-cols-3 border-0 p-0 dark:bg-transparent backdrop-blur-none">
                        {companyValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                            >
                                <Card className="border-c1/10 mx-auto max-w-3xl rounded border p-5 text-center shadow-none dark:border-white/5 dark:bg-white/1 dark:shadow-lg dark:backdrop-blur-lg">
                                    <CardContent className="p-6">
                                        <div className="bg-c1/10 mb-4 w-fit rounded-full p-3">{value.icon}</div>
                                        <h3 className="mb-2 text-left text-xl font-semibold">{value.title}</h3>
                                        <p className="text-foreground/80 text-left hyphens-auto">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </TabContent>
                </Tabs>
            </div>
        </section>
    );
}

function MisioVision({ icon, title, value, description }) {
    return (
        <TabContent value={value} classWrap="max-w-3xl">
            <ComponentIcon icon={icon} className="text-c1 mx-auto mb-4 h-12 w-12" />
            <h3 className="font-poppins mb-4 text-2xl font-bold">{title}</h3>
            <p className="text-foreground/80 text-lg">{description}</p>
        </TabContent>
    );
}
