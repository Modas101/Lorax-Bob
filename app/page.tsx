'use client';

import { useState } from 'react';
import { ChatInterface } from '@/components/chat-interface';
import { JournalView } from '@/components/journal-view';
import { StatsView } from '@/components/stats-view';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, BookOpen, BarChart3 } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/background.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-4 bg-black/30 backdrop-blur-md border border-white/10">
            <TabsTrigger value="chat" className="flex items-center gap-2 data-[state=active]:bg-white/20">
              <MessageSquare className="w-4 h-4" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="journal" className="flex items-center gap-2 data-[state=active]:bg-white/20">
              <BookOpen className="w-4 h-4" />
              Journal
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2 data-[state=active]:bg-white/20">
              <BarChart3 className="w-4 h-4" />
              Stats
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="flex-1 mt-0">
            <ChatInterface onNavigateToJournal={() => setActiveTab('journal')} />
          </TabsContent>
          
          <TabsContent value="journal" className="flex-1 mt-0">
            <JournalView />
          </TabsContent>
          
          <TabsContent value="stats" className="flex-1 mt-0">
            <StatsView />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

